export function useComp(){
    const helloWorld = reactive({controller: 'nothing'});

    watch(()=> [helloWorld], () => {
        console.log('hello');
    })
}