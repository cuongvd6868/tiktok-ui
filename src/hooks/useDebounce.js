import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {

        const handler = setTimeout(() => setDebounceValue(value), delay); // sau 1 khoảng delay mới set lại value 

        return () => clearTimeout(handler); // hủy bỏ timeout cũ (sau mỗi lần nhận value thì delay lại set lại từ đầu)
    }, [value]) // value nhận thay đổi từ prop

    return debounceValue;
}

export default useDebounce;