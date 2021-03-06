<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class postCommentRequest extends FormRequest
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
            'body'=>'required|min:6',
            'discussion_id'=>'required',
            'user_id'=>'required'
        ];
    }
    public function messages(){
        return [
            'body.min'=>'用户名最少6个字符'
        ];
    }
}
