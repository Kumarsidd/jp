import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    location: "",
    destination: {
        min: 0,
        max: 100,
    },
    createdAt:"",
    category: "",
    candidateGender: "",
    datePost: "",
    experiences: [],
    experience_to:"",
    experience_from:"",
    qualifications: [],
    qualification:"",
    sort: "",
    limit:3,
    page:1,
    perPage: {
        start: 0,
        end: 0,
    },
};

export const candidateFilterSlice = createSlice({
    name: "candidate-filter-slice",
    initialState,
    reducers: {
        addKeyword: (state, { payload }) => {
            state.keyword = payload;
        },
        addLocation: (state, { payload }) => {
            state.location = payload;
        },
        addDestination: (state, { payload }) => {
            state.destination.min = payload.min;
            state.destination.max = payload.max;
        },
        addCategory: (state, { payload }) => {
            state.category = payload;
        },
        addCandidateGender: (state, { payload }) => {
            state.candidateGender = payload;
        },
        addDatePost: (state, { payload }) => {
            state.datePost = payload;
        },
        addExperience: (state, { payload }) => {
             if(payload.experience_to){
                state.experience_to=payload.experience_to
             }
             if(payload.experience_to){
                state.experience_from=payload.experience_from
             }
        },
        clearExperienceF: (state) => {
            state.experiences = [];
        },
        addQualification: (state, { payload }) => {
            const isExist = state.qualifications.includes(payload);
            if (!isExist) {
                state.qualifications.push(payload);
            } else {
                state.qualifications = state.qualifications.filter(
                    (item) => item !== payload
                );
            }
        },
        addEdcucation: (state, { payload }) => {
            state.qualification=payload
          
        },
        clearQualificationF: (state) => {
            state.qualifications = [];
        },
        addSort: (state, { payload }) => {
            state.sort = payload;
        },
        addPerPage: (state, { payload }) => {
            state.perPage = payload;
        },
        addLimit: (state, { payload }) => {
            state.limit = payload;
        },
        addPage: (state, { payload }) => {
            console.log("payload",payload)
            state.page = payload;
        },
        clearMatchingCandidate:(state,{payload})=>{
        },
        clearAllFilters: (state) => {
            console.log("clear")
            Object.assign(state, initialState);
        }
    },
});

export const {
    addKeyword,
    addLocation,
    addDestination,
    addCategory,
    addCandidateGender,
    addDatePost,
    addExperience,
    clearExperienceF,
    addQualification,
    clearQualificationF,
    addSort,clearAllFilters,
    addPerPage,addEdcucation,addLimit,addPage
} = candidateFilterSlice.actions;
export default candidateFilterSlice.reducer;
