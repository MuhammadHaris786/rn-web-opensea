import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ImagePick from "../components/ImagePick";
export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <TextInput placeholder={"Car Name"} />
      <TextInput placeholder={"Car Description"} />
      <TextInput placeholder={"Car Price"} />
      <ImagePick />

      <Button>Submit</Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Root" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}
