const Header = () => {
    const textx = "Hello React-1";
    const getText = (text) => {
        return (
            <div>
                <h1>Hello React-2 {text}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aspernatur, incidunt non quam eum fuga facilis
                    repudiandae dolores dolor voluptatum!
                </p>
            </div>
        );
    };
    return <div>{getText(textx)}</div>;
};

export default Header; //export qilishni birinchi yo'li//yani faqat bitta componentni export qiladi
