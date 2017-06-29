declare module '*.html' {
    const template: string;
    export default template;
}

{{#bootstrapvue}}
declare module 'bootstrap-vue' {
    const BootstrapVue: any
    export default BootstrapVue;
}
{{/bootstrapvue}}