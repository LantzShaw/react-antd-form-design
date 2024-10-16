import { InputProps, SelectProps, RadioProps, CheckboxProps, DatePickerProps, UploadProps, RateProps } from 'antd'

const formFieldType = ['Input', 'TextArea', 'InputNumber', 'Select', 'Radio', 'Checkbox', 'DatePicker', 'DateRangePicker', 'Upload', 'Rate'] as const

export type FormFieldTypeUnion = typeof formFieldType[number]

export type Option = {
    label: string | number
    value: string | number
    children?: Option[]
}

export type ValueType = {
    type: FormFieldTypeUnion
    inputProps?: InputProps
    selectProps?: SelectProps
    radioProps?: RadioProps
    checkboxProps?: CheckboxProps
    datePickerProps?: DatePickerProps
    dateRangePickerProps?: DatePickerProps
    uploadProps?: UploadProps
    rateProps?: RateProps
}

export type FormSchema = {
    label: string
    name: string
    type: 'Input' | 'TextArea' | 'InputNumber' | 'Select' | 'Radio' | 'Checkbox' | 'DatePicker' | 'DateRangePicker' | 'Upload' | 'Rate'
    valueType?: ValueType

    // label: string
    // name: string
    // required?: boolean
    // options?: Option[]
    // defaultValue?: any
    // placeholder?: string
    // rules?: any[]
    // dateType?: 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss'
    // disabled?: boolean
    // readonly?: boolean
}

/** 组件类型
   * | type |  组件名称  |
   * | :--: | :--------: |
   * |  1   |  文本输入  |
   * |  2   |  数字输入  |
   * |  3   | 下拉单选框 |
   * |  4   |    日期    |
   * |  5   |  日期区间  |
   * |  6   |  说明文字  |
   * |  7   |    图片    |
   * |  8   |  团队成员  |
   * |  9   |    地点    |
   * |  10  |  合作伙伴  |
   * |  11  |   收发地   |
   * |  12  |  计算公式  |
   * |  13  | 关联审批单 |
   * |  99  |    套件    |
   */

const formSchema: FormSchema[] = [
    {
        label: '文本输入',
        name: 'text',
        type: 'Input',
        valueType: {
            type: 'Input',
            inputProps: {
                placeholder: '请输入文本'
            }
        }
    },
    {
        label: '数字输入',
        name: 'number',
        type: 'InputNumber',
        valueType: {
            type: 'InputNumber',
            inputProps: {
                placeholder: '请输入数字'
            }
        }
    }
]