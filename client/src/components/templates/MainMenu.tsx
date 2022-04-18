/**
 * メインメニュー
 * - template(テンプレート) では organism, molecule, atom および基本タグのみ使用できる
 * - template(テンプレート) では固有の文言を含めた Page(ページ) で使用するパーツを作成
 * - template(テンプレート) では Redux のロジックと TypeScript による動作を組み込む
 */
import {
  ColorPalette,
  DisplaySize,
  hexToRgba,
  MainMenus,
  UrlPath,
  Z_INDEX,
} from 'commons';
import { GoogleFontsIcon } from 'components/atoms';
import { IconBlock } from 'components/molecules';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  BasicSlice,
  colorPaletteSelector,
  displaySizeSelector,
  mainMenuOpenSelector,
  useTypeDispatch,
  useTypeSelector,
} from 'stores';
import styled from 'styled-components';

interface WrapProps {
  colorPalette: ColorPalette;
  displaySize: DisplaySize;
  isOpen: boolean;
}

const Wrap = styled.div<WrapProps>`
  box-sizing: border-box;
  position: fixed;
  top: calc(38px + 16px + 1px);
  bottom: 0;
  z-index: ${Z_INDEX.mainMenu};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ colorPalette }) => hexToRgba(colorPalette.concept, 0.9)};
  min-height: 40px;
  height: calc(100vh - 38px - 56px - 32px - 2px);
  ${({ displaySize, isOpen }) =>
    displaySize !== DisplaySize.LARGE &&
    !isOpen &&
    'height: calc(30vh - 38px - 56px - 32px - 2px);'}
  border-top: 3px solid ${({ colorPalette }) => colorPalette.lightTone};
  border-right: 3px solid ${({ colorPalette }) => colorPalette.lightTone};
  border-bottom: 3px solid ${({ colorPalette }) => colorPalette.lightTone};
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  color: ${({ colorPalette }) => colorPalette.lightTone};
  transition: 0.3s ease-in-out;
`;

interface MenuArea {
  isOpen: boolean;
}

const MenuArea = styled.div<MenuArea>`
  box-sizing: border-box;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? '240px' : '0px')};
  height: 100%;
  transition: 0.3s ease-in-out;
`;

interface MenuItemProps {
  colorPalette: ColorPalette;
  isPcWindow: boolean;
  selected: boolean;
}

const MenuItem = styled.a<MenuItemProps>`
  display: flex;
  align-items: center;
  ${({ colorPalette, selected }) =>
    selected && `background: ${colorPalette.conceptLight};`}
  width: 240px;
  padding: 8px 0 8px 16px;
  border-bottom: 1px solid
    ${({ colorPalette }) => hexToRgba(colorPalette.concept, 0.9)};
  color: ${({ colorPalette }) => colorPalette.lightTone};
  text-decoration: none;
  cursor: pointer;
  ${({ selected }) => selected && 'pointer-events: none;'}

  ${({ colorPalette, isPcWindow }) =>
    isPcWindow &&
    `
  &:hover {
    background: ${colorPalette.conceptLight};
  }
  `}
`;

interface ToggleButtonProps {
  colorPalette: ColorPalette;
  displaySize: DisplaySize;
}

const ToggleButton = styled.button<ToggleButtonProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ colorPalette }) => hexToRgba(colorPalette.concept, 0)};
  width: 28px;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0 8px 8px 0;
  color: ${({ colorPalette }) => colorPalette.lightTone};
  cursor: pointer;

  ${({ colorPalette, displaySize }) =>
    displaySize === DisplaySize.LARGE &&
    `
  &:hover {
    background: ${colorPalette.conceptLight};
  }
  `}
`;

interface ToggleButtonIconProps {
  mainMenuOpen: boolean;
}

const ToggleButtonIcon = styled.span<ToggleButtonIconProps>`
  transform: ${({ mainMenuOpen }) => `rotate(${mainMenuOpen ? 0 : -180}deg)`};
  transition: 0.3s ease-in-out;
`;

interface MainMenuProps {
  selectedMainMenu: MainMenus;
}

/**
 * 【テンプレート】 メインメニュー
 * @param {MainMenus} selectedMainMenu - 【必須】 選択中のメニュー
 * @returns コンポーネント
 */
export const MainMenu: React.FC<MainMenuProps> = ({
  selectedMainMenu,
}: MainMenuProps) => {
  const history = useHistory();
  const useDispatch = useTypeDispatch();
  const colorPalette = useTypeSelector(colorPaletteSelector);
  const displaySize = useTypeSelector(displaySizeSelector);
  const mainMenuOpen = useTypeSelector(mainMenuOpenSelector);

  useEffect(() => {
    if (displaySize === DisplaySize.LARGE) {
      useDispatch(BasicSlice.actions.changeMainMenuOpen(true));
    } else {
      useDispatch(BasicSlice.actions.changeMainMenuOpen(false));
    }
  }, [displaySize]);

  return (
    <Wrap
      colorPalette={colorPalette}
      displaySize={displaySize}
      isOpen={mainMenuOpen}
    >
      <MenuArea isOpen={mainMenuOpen}>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.HOME}
          onClick={() => history.push(UrlPath.HOME)}
        >
          <IconBlock
            iconName="qr_code_2"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.HOME}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.COUPON}
          onClick={() => history.push(UrlPath.COUPON)}
        >
          <IconBlock
            iconName="confirmation_number"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.COUPON}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.POINT}
          onClick={() => history.push(UrlPath.POINT)}
        >
          <IconBlock
            iconName="sync_alt"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.POINT}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.POINT_LOG}
          onClick={() => history.push(UrlPath.POINT_LOG)}
        >
          <IconBlock
            iconName="history"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.POINT_LOG}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.HISTORY}
          onClick={() => history.push(UrlPath.HISTORY)}
        >
          <IconBlock
            iconName="theaters"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.HISTORY}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.PROFILE}
          onClick={() => history.push(UrlPath.PROFILE)}
        >
          <IconBlock
            iconName="edit"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.PROFILE}
        </MenuItem>
        <MenuItem
          colorPalette={colorPalette}
          isPcWindow={displaySize === DisplaySize.LARGE}
          selected={selectedMainMenu === MainMenus.LOGOUT}
          onClick={() => history.push(UrlPath.LOGOUT)}
        >
          <IconBlock
            iconName="logout"
            iconSize={24}
            height="24px"
            margin="0 16px 0 0"
          />
          {MainMenus.LOGOUT}
        </MenuItem>
      </MenuArea>
      <ToggleButton
        colorPalette={colorPalette}
        displaySize={displaySize}
        onClick={() =>
          useDispatch(BasicSlice.actions.changeMainMenuOpen(!mainMenuOpen))
        }
      >
        <ToggleButtonIcon mainMenuOpen={mainMenuOpen}>
          {mainMenuOpen ? (
            <GoogleFontsIcon name="menu_open" size={24} />
          ) : (
            <GoogleFontsIcon name="menu_open" size={24} />
          )}
        </ToggleButtonIcon>
      </ToggleButton>
    </Wrap>
  );
};
