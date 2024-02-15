type Category = {
    "id": string,
    "name": string,
    "slug": string,
    "meta_description": string
}

type Post = {
    "id": string,
    "meta_description": string,
    "title": string,
    "subtitle": string,
    "heading1": string,
    "content1": string,
    "heading2": string,
    "content2": string,
    "heading3": string,
    "content3": string,
    "heading4": string,
    "content4": string,
    "heading5": string,
    "content5": string,
    "heading6": string,
    "content6": string,
    "heading7": string,
    "content7": string,
    "heading8": string,
    "content8": string,
    "heading9": string,
    "content9": string,
    "heading10": string,
    "content10": string,
    "pub_date": string,
    "title_image": string,
    "image1": string,
    "image2": string,
    "image3": string,
    "image4": string,
    "image5": string,
    "image6": string,
    "image7": string,
    "image8": string,
    "image9": string,
    "image10": string,
    "slug": string,
    "is_best": boolean,
    "is_recommended": boolean,
    "is_trends_ai": boolean,
    "is_trends_data": boolean,
    "is_industry_insights": boolean,
    "is_ai_software": boolean,
    "author": 1
    "category": Category[]
    "sponsor_link":string,
}

type PostDetail = {
    post: Post;
    previous?: Post; // 一つ前の記事は存在しない場合もあるため、オプショナルにする
    next?: Post;     // 一つ先の記事は存在しない場合もあるため、オプショナルにする
  }