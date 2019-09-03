import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <View>
      <View>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </View>
      <View>
        <Text>
          <b>이름:</b> {name}
        </Text>
        <Text>
          <b>닉네임: </b>
          {nickname}
        </Text>
      </View>
    </View>
  );
};

export default Info;
