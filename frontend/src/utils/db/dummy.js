export const POSTS = [
    {
        id: '1',
        text: 'lets build fullstack whatsapp clone with next',
        img: '/posts/post1.png',
        user: {
            username: 'name',
            profileImg: '/avatars/boy1.png',
            fullName:'person'
        },
        comments: [
            {
                _id: '1',
                text: 'comment',
                user: {
                    username: 'person2',
                    profileImg:'/avatars/woman1.png'
                }
            }
        ],
        likes:['6658x891','6658x892','6658x893','6658x894']
    },
    {
        id: '2',
        text: 'how is everyone',
        img: '/posts/post2.png',
        user: {
            username: 'name',
            profileImg: '/avatars/boy2.png',
            fullName:'person'
        },
        comments: [
            {
                _id: '1',
                text: 'comment',
                user: {
                    username: 'person2',
                    profileImg:'/avatars/woman1.png'
                }
            }
        ],
        likes:['6658x891','6658x892','6658x893','6658x894']
    }
]
export const USERS_FOR_RIGHT_PANEL=[

{
_id: '1',
    fullName: 'name',
        username:'person name',
profileImg:'/avatars/woman2.png'        
        },
{
_id: '1',
    fullName: 'name1',
        username:'person1 name1',
profileImg:'/avatars/woman1.png'        
        },
{
_id: '1',
    fullName: 'name2',
        username:'person2 name2',
profileImg:'/avatars/boy1.png'        
        }
    ]