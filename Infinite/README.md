# On scroll Feature
## window based scroll
In this scrolling uses a window where it checks the height of screen and client where his mouse pointer scroll and total height
### Formula whhich I used
const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage(prev => prev + 1);
      }
    };

## Div base Scrolling
In this where we fixed the div and make the scroll inside the content for eg. chat application

### Always remember the Height should be fixed and Overflow will be auto 
.outer {
  height: 150px;
  overflow-y: auto;
  border: 1px solid black;
  margin-bottom: 16px;
}

* Love to build things