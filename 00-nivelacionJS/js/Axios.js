//con la libreria axios puedo trarer la información de una forma más simple que con la función fetch, en este ejemplo estamos aplicando destructuring para la obtención de los datos
axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(({data}) => console.log(data));