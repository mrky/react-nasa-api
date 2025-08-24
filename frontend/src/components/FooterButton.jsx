export default function FooterButton(props) {
    const { onclick, title, icon } = props;

    return (
        <button className='p-3 p-sm-2 p-md-3'
            onClick={onclick && onclick}
            title={title && title}
            type="button">
            {icon && (<i className={icon + " fa-lg"}></i>)}
        </button>
    );
}