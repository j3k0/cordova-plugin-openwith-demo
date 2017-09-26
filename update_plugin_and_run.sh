#!/bin/bash
(cd ..; npm t) \
  && cordova plugin rm cc.fovea.cordova.openwith \
  && cordova plugin add .. --variable MIME_TYPE="image/*" \
  && cordova run android --debug --device
