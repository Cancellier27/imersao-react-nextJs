import styled from 'styled-components'

const Widget = styled.div`
margin: 24px 0;
border: 1px solid #1C1814;
background-color: #1C1814;
border-radius: 4px;
overflow: hidden;

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
`

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0
}
& > *:last-child {
  margin-top: 0
}
ul {
  list-style: none;
  padding: 0;
}
`

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`

export default Widget
