import { INews } from '../newsModel'

const htmlNews = `
<p style="text-align:center"><span style="font-size:18px"><span style="color:#ffffff"><strong><span style="font-family:Arial,Helvetica,sans-serif">Lorem Ipsum!</span></strong></span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem Ipsum</span></span></span></strong></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem Ipsum,Lorem Ipsum Lorem Ipsum,Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum.</span></span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum</span></span></span></strong></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum.</span></span></span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p style="text-align:center"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><img alt="" src="https://play-lh.googleusercontent.com/mVrfIXxFLMO7hb3IrY4YRwKRJyXAaJ3X7ST3Qs2VkCQezDRxx1AMCtTCVAYK5hHHKqQ" style="height:512px; width:512px" /></span></span></p>

<p style="text-align:center">&nbsp;</p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem,</span></span></span></p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum.</span></span></span></strong></p>

`
const htmlNews2 = `
<p style="text-align:center"><span style="font-size:18px"><span style="color:#ffffff"><strong><span style="font-family:Arial,Helvetica,sans-serif">Lorem Ipsum!</span></strong></span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem Ipsum</span></span></span></strong></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem Ipsum,Lorem Ipsum Lorem Ipsum,Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum.</span></span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem IpsumLo</span></span></span></strong></p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum.</span></span></span></p>

<p>&nbsp;</p>

<p style="text-align:center">&nbsp;</p>

<p><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem,</span></span></span></p>

<p><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:16px"><span style="color:#ffffff">Lorem Ipsum.</span></span></span></strong></p>

`

const mockNews: INews[] = [
  {
    id: 1,
    title: 'Titulo Lorem Ipsum!',
    body: htmlNews,
    type: 1,
    date: 1669477200,
    category: 1,
    player_id: 123,
    last_modified_by: 456,
    last_modified_date: 1669477200,
    comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    article_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra euismod metus non commodo. Suspendisse interdum eu mi sit amet dignissim. Sed euismod, justo et laoreet convallis, ligula dolor bibendum lacus, vel luctus nunc arcu id mauris. Ut at sem consectetur, convallis lacus id, placerat elit. Sed sollicitudin eu quam a sagittis. Nunc consequat dolor risus, id malesuada massa lobortis nec. Praesent pellentesque, sem nec malesuada varius, orci nulla cursus elit, id dictum lorem justo sit amet nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum facilisis sagittis metus, in venenatis tellus suscipit eu. Sed sed neque malesuada, fermentum enim in, tempor est.',
    article_image: 'https://example.com/news-image.jpg',
    hidden: 0
  },
  {
    id: 2,
    title: 'Titulo Lorem',
    body: htmlNews2,
    type: 2,
    date: 1669587600,
    category: 2,
    player_id: 123,
    last_modified_by: 789,
    last_modified_date: 1669587600,
    comments: 'Nulla vitae libero odio. Sed ac scelerisque est, in facilisis nulla. Vestibulum quis vestibulum mauris.',
    article_text:
      'Vestibulum sagittis augue at est finibus, vitae rutrum metus mattis. Suspendisse rutrum sapien et libero ultrices, vel laoreet justo iaculis. Duis pulvinar vulputate eros, ut eleifend odio blandit sed. Nunc nec vestibulum justo. Vestibulum pharetra bibendum dolor, eget luctus lectus laoreet et. Praesent suscipit metus eget fringilla rutrum. Nulla facilisi. Integer porttitor commodo nisl, eget elementum nisi laoreet vitae. Etiam malesuada nibh quis eros iaculis, non gravida nunc luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer bibendum sem sit amet risus aliquet bibendum. Donec nec luctus orci. Mauris aliquam pulvinar massa. Aliquam non volutpat tortor.',
    article_image: 'https://example.com/news-image.jpg',
    hidden: 0
  }
]

export { mockNews }
