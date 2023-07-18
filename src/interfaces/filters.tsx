export interface Filters {
    type: string;
    account: string;
    category: string;
    tags: string[];
}

export interface OptionType {
    label: string;
    value: string;
}

export interface MultiSelectProps {
    options: OptionType[];
    onChange: (selectedOptions: OptionType[]) => void;
    removeOption: boolean;
}

export interface State {
    selectedOptions: OptionType[];
}

export interface Action {
    type: string;
    payload?: any;
}
