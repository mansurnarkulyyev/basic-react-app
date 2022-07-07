import React from 'react';
import st from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={st.myInput} {...props} />
    );
});
export default MyInput;