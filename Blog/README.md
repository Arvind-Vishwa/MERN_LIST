## Blog Page 
Link -->**https://luxury-sorbet-6e6966.netlify.app/**
### functionality
1. Nested Routing
2. Used a useParams to take *id* from url then finded the all data using id
    const {id}=useParams();

        let pro;
        for(let d of data){
            if(d.id == id){
                pro=d;
            }
        }
3. Use useEffect to loading page
   
## key Points-
1. Always use Routes in App.jsx
2. Try to console if any error get
3. Make multiple component

**Love to build things**

    Author-
    Arvind Vishwakarma
