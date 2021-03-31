export default{
    namespaced: true,
    state: {
        // applicantInfo: null
    },
    getters: {
        // getApplicantInfo: state => state.applicantInfo
    },
    mutations: {
        // setApplicantInfo(state,data){
        //     state.applicantInfo = data;
        // }
    },
    actions: {
        // setApplicantInfo: (context,payload) => {
        //     context.commit('setApplicantInfo', payload);
        // }
        initStore: () => {
            console.log('hello world')
        }
    }
};