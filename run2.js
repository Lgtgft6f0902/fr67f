#!/bin/sh
UUID=${UUID:-'231c7dcb-7a47-4589-b2ef-96cc7bf1ae01'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
