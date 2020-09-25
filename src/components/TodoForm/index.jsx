import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    /// Có 1 cái props duy nhất dạng FUNCTION
    onSubmit: PropTypes.func,

};

// Để giá trị mặc định là NULL
TodoForm.defaultProps = {
    onSubmit: null,

}

function TodoForm(props) {
    // sử dụng object destructoring dể lấy cái props ra
    const { onSubmit } = props;
    //  State để lưu trữ cái input vào...... Giá trị khỏi tạo là 1 chuỗi rỗng
    const [value, setValue] = useState('');


    // Hàm giúp giải quyết lỗi Controll Component phía dưới,....    
    //Khi input chổ return thay đổi thì hàm này cũng cập n hật lại cái state
    function handleValueChange(e) {
        console.log(e.target.value);
        //dòng này giúp thanh input có thể hiện chữ đã nhập
        setValue(e.target.value);
    }
    // Hàm này giúp trang web ko bị re load lại 
    function handleSubmit(e) {
        e.preventDefault();
        //  Kiểm tra hàm onSubmit truoc khi dung vi gia tri onSubmit da set luc truoc laf NULL
        if (!onSubmit) return;
        // 
        const  formValues = {
            title: value,  
        };

        onSubmit(formValues);
        /// Reset Form  De cho cac kys tu trong khung input ve 0
        setValue('');
    }

    
    // trong return có 1 thẻ form và 1 thẻ input
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={value} // Gán value cho value cũa input
                // nếu không có onChange thì value = value sẽ bị lỗi dẫn đến tình trạng Controll Component
                onChange={handleValueChange} />

        </form>
    );
}

export default TodoForm;