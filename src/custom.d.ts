// ts全局自定义类型的文件
type RecordItem = {// 记录声明类型
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdDate?: Date; // object细分为不同的类 构造函数
}