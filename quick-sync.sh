#!/bin/bash
SOURCE_PLUGIN_PATH=..

for FILE in \
  ShareViewController.m \
  OpenWithPlugin.m \
  OpenWithPlugin.java \
  ByteStreams.java \
  PluginResultSender.java \
  Serializer.java
do
  echo $FILE...
  SRC=`find $SOURCE_PLUGIN_PATH/src -name $FILE`
  find . -name $FILE -exec cp $SRC '{}' ';'
done

# for FILE in openwith.js
# do
#   echo $FILE...
#   SRC=`find $SOURCE_PLUGIN_PATH/www -name $FILE`
#   find . -name $FILE -exec cp $SRC '{}' ';'
# done
