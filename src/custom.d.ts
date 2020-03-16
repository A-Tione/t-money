// ts全局自定义类型的文件
type RecordItem = {// 记录声明类型
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string; // object细分为不同的类 构造函数
}

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; // 联合类型强校验
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
}

type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
