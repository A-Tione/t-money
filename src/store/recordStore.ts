import recordLIstMoel from '@/models/recordListModel';

export default {
    // record store
    recordList: recordLIstMoel.fetch(),
    createRecord: (record: RecordItem) => recordLIstMoel.create(record)
};