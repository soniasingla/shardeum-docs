---
title: Third Party Providers
sidebar_position: 4
---

## Run Shardeum Validator on Spheron

Shardeum on Spheron enables developers to quickly spin up a validator node with all the boilerplate abstracted away while running on decentralized, elastic, robust compute infrastructure.

[Learn How to Deploy your own Shardeum Testnet Validator Node with Spheron](https://docs.spheron.network/marketplace-guide/shardeum/)

## How to run the node?

Once the deployment is complete and you have a provider host with assigned ports, follow these steps in your terminal:

```shell
ping provider.us-east.spheron.wiki
# or
ping provider.spheron.wiki
```

- Set the IP address of the server as values for the variables SERVERIP and LOCALLANIP.
- Update Port Variables:
    - SHMEXT: Update from 9001 -> External Port assinged on 9001.
    - SHMINT: Update from 10001 -> External Port assigned on 10001.
- In the Compute Shell Tab, execute the following command to update the dashboard password:

```shell
operator-cli gui set password yourpasswordherewrite
```