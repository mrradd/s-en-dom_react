import './BlogLayoutDemo.css'
import './TestCSS.css'

export const BlogLayoutDemo = () => {
    return (
        <>
            <div className={'blog-layout'}>
                <div className={'header'}>Header Placeholder</div>
                <div className={'nav'}>Nav Placeholder</div>
                <div className={'main-content test-border'}>
                    <div className={'left-gutter red-border'}>Left Gutter</div>
                    <div className={'center-content blue-border'}>Main Content</div>
                    <div className={'right-gutter darkmagenta-border'}>Right Gutter</div>
                </div>
            </div>
        </>
    );
}