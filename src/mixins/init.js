const appMixin = {
    methods: {
        initialize() {
            this.$http.get("/collaborators").then(res => {
                console.log("colls", res.data.rows);
                this.$store.commit("colls/setCollaborators", res.data.rows);
            });

            this.$http.get("/projects").then(res => {
                console.log("proj", res.data.rows);
                this.$store.commit("projects/setProjects", res.data.rows);
            });

            this.$http.get("/researches").then(res => {
                console.log("research", res.data.rows);
                this.$store.commit("research/setResearches", res.data.rows);
            });

            this.$http.get("/partners").then(res => {
                console.log("partn", res.data.rows);
                this.$store.commit("partners/setInstitutes", res.data.rows);
            });

            this.$http.get("/research_lines").then(res => {
                console.log("lines", res.data.rows);
                this.$store.commit("projects/setLines", res.data.rows);
            });
        }
    }
}

export default appMixin