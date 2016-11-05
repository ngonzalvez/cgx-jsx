# cgx-jsx


## Important Notice
This library is still in an early alpha, so it's may be buggy and/or change dramatically in the future.


## Installation

**Transpilation**

First, you need to install the dependencies for transpiling ES6 and JSX to ES5.

~~~sh
npm i --save-dev babel-cli babel-preset-latest babel-plugin-transform-react-jsx
~~~

Then, create a .babelrc file with the following settings:

~~~json
{
    "presets": ["latest"],
    "plugins": [
        ["transform-react-jsx", { "pragma": "$h" }]
    ]
}
~~~

After that, install and add cgx-jsx to your front-end dependencies.

~~~sh
bower install cgx-jsx
~~~

Finally, set up the transpilation process with webpack, gulp or whatever you like.


## Usage

There are two way to create elements. Using variables:

~~~jsx
const CustomHeader = (
    <header>
        <a class="logo"></a>

        <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </header>
);

const Page = (
    <div>
        <CustomHeader/>
        <p>Welcome!</p>
    </div>
);

document.onload = () => document.body.appendChild(Page);
~~~

or using classes:

~~~jsx
class Header {
    render() {
        return (
            <header>
                <a class="logo"></a>

                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </header>
        );
    }
}

class Page {
    render() {
        return (
            <div>
                <CustomHeader/>
                <p>Welcome!</p>
            </div>
        );
    }
}

document.onload = () => {
    var page = new Page();
    document.body.appendChild(page.render());
};
~~~
