import os
from tkinter import Tk
from tkinter.filedialog import askdirectory

while True:
    input("Press a key to create a new component...")
    Tk().withdraw()

    initial_dir = "C:/Users/furka/Desktop/Start-Up/PlanA/src"
    target_path = askdirectory(title="Select Target Directory", initialdir=initial_dir)


    print("")
    name = input("Enter the name of the component: ")
    print("")

    style_text = """import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
        
    });

    export default styles;
    """

    react_text = """import React from 'react';
    import {
        View,
        Text,
    } from 'react-native';

    import styles from './"""+ name +""".style';


    function """+ name +"""(): React.JSX.Element {
        return(
            <View>
                <Text>"""+ name +"""</Text>
            </View>
        );
    };

    export default """+ name +""";
    """

    os.makedirs(os.path.join(target_path, name), exist_ok=True)

    with open(os.path.join(target_path, name, name + ".tsx"), 'w') as f:
        f.write(react_text)

    with open(os.path.join(target_path, name, name + ".style.tsx"), 'w') as f:
        f.write(style_text)

    with open(os.path.join(target_path, name, "index.js"), 'w') as f:
        f.write("export { default } from './"+ name + "';")