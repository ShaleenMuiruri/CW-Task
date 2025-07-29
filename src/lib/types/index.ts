export interface SearchBarProps {
    initialValue?: string;
    onSearch: (search: string) => void;
    placeholder?: string;
    className?: string;
    showButton?: boolean;
  }
  