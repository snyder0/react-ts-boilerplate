module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    ignore: ['**/*Styles.ts', '**/components/'],
    theme: {
        color: {
            base: '#333',
            light: '#767676',
            lightest: '#ccc',
            link: '#1673b1',
            linkHover: '#25dbd8',
            focus: 'rgba(22, 115, 177, 0.25)',
            border: '#e8e8e8',
            name: '#690',
            type: '#905',
            error: '#c00',
            baseBackground: '#fff',
            codeBackground: '#f5f5f5',
            sidebarBackground: '#f5f5f5',
            ribbonBackground: '#e90',
            ribbonText: '#fff',
            // Based on default Prism theme
            codeBase: '#333',
            codeComment: '#6d6d6d',
            codePunctuation: '#999',
            codeProperty: '#905',
            codeDeleted: '#905',
            codeString: '#690',
            codeInserted: '#690',
            codeOperator: '#9a6e3a',
            codeKeyword: '#1673b1',
            codeFunction: '#DD4A68',
            codeVariable: '#e90',
        }
    },
    title: 'React Ts Boilerplate Documentaion'
}