function customRender(reactElement , container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target )

    // container.appendChild(domElement);

    const domElement2 = document.createElement(reactElement.type)
    domElement2.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement2.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement2);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : "Click me to Visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement , mainContainer);