# SmartMemershipServer

# 準備

```
yarn install
```

## config/xxx.ymlの準備

開発環境の場合は dev.yml など
会社環境の場合は xxxcompany.yml などとする

```
cp config/example.yml config/dev.yml
```


|KEY|VALUE|説明|
|----|----|----|
|corsOrigin|\*|CORSの設定、特定のドメインからのみの場合は必要な形で設定\(https://smarttheater.com など\)|
|customDomain.hostsZoneId|A01234567890123|Route53のホストゾーンID|
|customDomain.domainName|hoge.test.com|カスタムドメイン|


## デプロイ

### 最初のみドメインの作成

aws\_profileの値は環境に合わせる

```
yarn sls create_domain --stage xxxcompany --aws-profile xxxcompany
```

```
yarn sls deploy --stage xxxcompany --aws-profile xxxcompany
```

