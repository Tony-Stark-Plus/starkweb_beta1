<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormRules extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [ 
            'uname' => 'required|min:3',
            'email' => 'required|email',
            'password'=>'required|between:6,18|confirmed',
            'password_confirmation'=>'required'
        ];
    }
    public function messages(){
        return [
            'uname.required' => '用户名不能为空',
            'uname.min'  => '用户名最少3个字段',
            'email.required'=>'邮箱不能为空',
            'email.email'=>'邮箱不合法',
            'password.required'=>'密码不能为空',
            'password.between'=>'密码需要6-18个字段',
            'password.confirmed'=>'两次密码不一致',
            'password_confirmation.required'=>'确认密码不能为空'
        ];
    }
}