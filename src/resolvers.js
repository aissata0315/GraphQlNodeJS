let simploniens = [
    { id: 1, nom:"Niang", prenom: "Marame", email:"marame@simplon.co" },
    { id: 2 , nom:"Sow", prenom: "Abdourahmane", email:"sow@simplon.co" }
]


const resolvers = {
    Query: {
        hello: () => 'world!',
        simploniens: (parent, args)=> simploniens,
        simplonien: (parent, args) => simploniens.find(simplonien=>simplonien.id == args.id)
    },
    Mutation: {
        createApprenant: (parent, {id, nom, prenom,email}) => {
            let checkID = simploniens.findIndex(simplonien => simplonien.id ==id)
            if (checkID == -1){
                 let newApprenant = {id, nom, prenom,email}
                 simploniens.push(newApprenant)
                return newApprenant
            } else {
                throw new Error("L'id exist deja!")
            }

        },
        deleteApprenant:(parent, {id})=> {
            let checkID = simploniens.findIndex(simplonien=>simplonien.id == id)
            if (checkID != -1){
                simploniens.splice(checkID, 1)
                return true
            } else {
                throw new Error("Cet apprenant n'existe pas")


            }
        }
    }
};
export default resolvers;

