---
title: RPC
sidebar_position: 2
---

# Running a RPC

## Why run a RPC?

Running your own RPC:

```
-increases read and write speed to a blockchain
-improves decentralization with more network endpoints for users to access
```

## How do I run an RPC on Shardeum?

More details on how to run a Shardeum RPC will be shared after Sphinx Validator 1.X.

## Draft Outline:

# Setting Up Shardeum RPC Node on a Server

## Introduction

Explain what the document covers and its target audience (in this case, exchanges looking to set up an RPC node for Shardeum).\*\*

## Prerequisites/Requirements

- SSH access to an Ubuntu server.
- Administrative (sudo) privileges on the server.
- Git and Node.js installed on the server.
- Access to the "json-rpc-server" repository URL.

## Step-by-Step Guide

This guide provides detailed instructions on how to securely access a server via SSH, deploy the "json-rpc-server" application, configure necessary files, and validate the setup by testing the node's functionality. This document is intended for exchanges or parties interested in setting up a JSON RPC node for Shardeum.\*\*

### Accessing the Server via SSH

**SSH Connection**:

Connect to your server using the SSH command:

    ssh username@server_ip_address

Replace `username` with your server's username and `server_ip_address` with the server's IP address.

#### Deploying the RPC Node

#### Update and Install Dependencies

1.  **Update Package Manager**:

    - Once connected, update your server's package manager:

      `sudo apt update && sudo apt upgrade -y`

2.  **Install Dependencies**:

    - Install any required dependencies that your "json-rpc-server" might need. Common dependencies include Git and Node.js. If not already installed, they can typically be installed via:

      `sudo apt install git nodejs npm -y`

#### Clone the Repository and Install

1.  **Clone the Repository**:

    - Clone the "json-rpc-server" repository to your server:

      `git clone https://gitlab.com/shardeum/json-rpc-server.git`

2.  **Navigate to the Repository Directory**:

    - Change directory to the cloned repository:

      `cd json-rpc-server`

3.  **Install Project Dependencies**:

    - Install Node.js dependencies defined in the project:

      `npm install`

### Configure Archiver IP and Run Server

#### _PLEASE NOTE: THIS SECTION IS IN DEVELOPMENT. IF YOU HAVE ISSUES YOU SHOULD REACH OUT TO SHARDEUM'S TEAM FOR THE CURRENT CONFIGURATION_

**Edit Configuration Files (if necessary)**:

The current Archiver IP is **_172.105.153.160_**. You'll need to configure this manually. Make sure you are in the json-rpc-server directory and do the following. Open the archiverConfig.json file:

            nano archiverConfig.json

Use the arrow keys to navigate to the "ip": "127.0.0.1", line (Note that this was the archiver IP at the time of this document's creation).

Delete 127.0.0.1 and replace it with 172.105.153.160 (**_THIS IS THE CURRENT ARCHIVER IP ADDRESSS_**. The text should now read "ip": "172.105.153.160",

Once you've made the change, you can save and exit nano by pressing Ctrl + O to write the changes, pressing Enter to confirm, and then Ctrl + X to exit the editor.

We can now repeat the process to update the .liberty_rpc file. Ensure your working directory is json-rpc-server and open the file with:

    nano .liberty_rpc

Follow similar steps as above, use the arrow keys to move down and make sure the externalIp line reads as follows:

    "externalIp": "172.105.153.160"

Once you've made the change, you can save and exit nano by pressing Ctrl + O to write the changes, pressing Enter to confirm, and then Ctrl + X to exit the editor.

**Start the RPC Server**:

Start the server using npm.

            npm run start

## Testing Your RPC Server

Once your RPC server is running, you can test it by making some read calls. It is advised that you give the node at least 10 minutes to sync after spinning it up to avoid issues.Shardeum uses a similar API modality as Ethers and you can make similar calls, for example:

    curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://<your_server_IP>:8080

Be sure to replace <your_server_IP> in the above call and you should get a non-zero response once your node is synced. Also note that this assumes you've not manually configured the port used to something other than 8080.

You can check an EOA's balance with:

    curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x924FA9B0565848a50Cc3e555eB5263a8288629f9", "latest"],"id":1}' http://<your_server_IP>:8080

## Troubleshooting

Offer solutions for common issues that might arise during setup.

## Contact Information

## Appendices
