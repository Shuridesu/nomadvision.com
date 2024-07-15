interface User {
  accessToken: string;
  uid: string;
	id: number;
	name: string;
	email: string;
	avatar: string;
	introduction: string;
}

interface SocialAuthArgs {
	provider: string;
	state: string;
	code: string;
}

interface CreateUserResponse {
	success: boolean;
	user: User;
}

interface Post {
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

interface PostDetail {
    post: Post;
    previous?: Post;
    next?: Post;
  }

interface Category {
	id: number;
	name: string;
	meta_description: string;
	slug: string;
}

interface PostList {
    posts: Post[];
    categories: Category[];
}

interface Comment {
    uid: string
    user: UserType
    content: string
    created_at: string
    id: number
  }
