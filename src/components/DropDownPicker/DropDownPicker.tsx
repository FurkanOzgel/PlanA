import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    FlatList,
    DimensionValue
} from 'react-native';

import styles from './DropDownPicker.style';

import { SvgXml } from 'react-native-svg';

import { arrow } from './../../assets/svg'

interface DropDownPickerItem {
    label: string;
    value: string;
};

interface DropdownPickerProps {
    onChange?: (value: string) => void;
    items: Array<DropDownPickerItem>;
    width?: DimensionValue;
    defaultValue?: string;
    placeholder?: string;
    placeholderStyle?: object;
    containerStyle?: object;
    activeItemStyle?: object;
    activeLabelStyle?: object;
    deactiveItemStyle?: object;
    deactiveLabelStyle?: object;
    arrowColor?: string;
};

function DropdownPicker({
    onChange,
    items,
    defaultValue,
    placeholder,
    width,
    placeholderStyle,
    containerStyle,
    activeItemStyle,
    activeLabelStyle,
    deactiveItemStyle,
    deactiveLabelStyle,
    arrowColor
}: DropdownPickerProps): React.JSX.Element {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

    const viewStyle = {
        'width': width
    }

    const handleSelect = (item: DropDownPickerItem) => {
        setSelectedValue(item.value);
        setIsOpen(false);
    };

    useEffect(() => {
        if (onChange) {
            onChange(selectedValue || "");
        }
    }, [selectedValue]);

    return (
        <View style={[viewStyle, styles.topContainer]}>
            <TouchableWithoutFeedback style={[styles.container, containerStyle]} onPress={() => setIsOpen(!isOpen)}>
                <View style={styles.dropdownHeader}>
                    <Text style={[styles.placeholderText, placeholderStyle]}>
                        {selectedValue
                            ? items.find(item => item.value === selectedValue)?.label
                            : placeholder || "Select an option"}
                    </Text>
                    {isOpen ? 
                        <SvgXml xml={arrow} rotation={270} fill={arrowColor}/> :
                        <SvgXml xml={arrow} rotation={90} fill={arrowColor}/>
                        }
                </View>
            </TouchableWithoutFeedback>
            {isOpen && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
                                <View
                                    style={
                                        selectedValue === item.value
                                            ? [styles.activeItem, activeItemStyle]
                                            : [styles.deactiveItem, deactiveItemStyle]
                                    }
                                >
                                    <Text
                                        style={
                                            selectedValue === item.value
                                                ? [styles.activeLabel, activeLabelStyle]
                                                : [styles.deactiveLabel, deactiveLabelStyle]
                                        }
                                    >
                                        {item.label}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default DropdownPicker;
