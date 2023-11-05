import { useForm } from 'react-hook-form'
import '../../../style/Signup/signup.css'
function Signup(){
    const {register,handleSubmit, formState:{errors}} = useForm()
    const handleData = (data) =>{
        console.log('oke')
    }
    return(
        <>
            <div id="signup_container">
                <h3 id="signup_container_heading">ĐĂNG KÍ TÀI KHOẢN</h3>
                <form onSubmit={handleSubmit(handleData)} action="" id="signup_container_form">
                    <h4 id='signup_container_title'>THÔNG TIN CÁ NHÂN</h4>
                    <label className='signup_container_form_label' htmlFor="fname">Tên</label>
                    <input className='signup_container_form_input' id="fname" {...register('fname', {required:true})}/>
                    {errors.fname && <span className="signup_notice">Vui lòng nhập tên</span>}
                    <span id="signup_notice_fname"></span>

                    <label className='signup_container_form_label' htmlFor="lname">Họ</label>
                    <input className='signup_container_form_input' id="lname" {...register('lname', {required:true})}/>
                    {errors.lname && <span className="signup_notice">Vui lòng nhập Họ</span>}
                    <span id="signup_notice_lname"></span>


                    <label className='signup_container_form_label' htmlFor="email">Email</label>
                    <input className='signup_container_form_input' type="email" id="email" {...register('email', {required:true})}/>
                    {errors.email && <span className="signup_notice">Vui lòng nhập Email</span>}

                    <label className='signup_container_form_label' htmlFor="password">Mật khẩu</label>
                    <input className='signup_container_form_input' type="password" id="password" {...register('password', {required:true, minLength:6})}/>
                    {errors.password && <span className="signup_notice">Mật khẩu tối thiểu 6 kí tự</span>}
                    <span id="signup_notice_password"></span>


                    <input type='submit' id='signup_container_btn' value='Đăng kí'/>
                </form>
            </div>
        </>
    )
}
export default Signup