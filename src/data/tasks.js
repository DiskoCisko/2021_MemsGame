import React from 'react';
export const tasks = {
    task_1: [
        {
            task: "Ольга стояла с Ириной у своего дома. В это время из дома Ирины вышел мальчик в капюшоне — усыновленный сын Ирины Денис 14-лет, и пошёл в противоположную сторону. Немного отойдя от дома его схватил человек, сидевший в припаркованной поблизости машине, схватил его и увёз. После похищения у родителей требовали выкуп, но через сутки перестали.",
    
        },
        {
            task: "Неподалеку от железнодорожной станции находят тела девяти молодых людей и девушек. Все они задушены наушниками.",
            title: "Музыка нас связала",
            id: 2
        },
    ],
    task_2: [
        
        {
            task: "Меладзе - Салют Вера.",
        },
    ],
    task_3: [
        {
            type: 'images',
            img: [
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
            ],
            ans: [
                '13',
                '13 pro max',
                '12',
                '12 pro max',
                
            ]
            
        },
        {
            task: "Меладзе - Салют Вера.",
        },
    ],
    task_4: [
        {
            task: "Лепс - Натали",
    
        },
        {
            task: "Меладзе - Салют Вера.",
        },
    ],
    task_5: [
        {
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/hlmIsFyZKb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            type: 'video'
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/0wt9Qn0j5VU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/BfI7ERk4-tA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/rh3QV_EPLhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/sGwRE2Zdh_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/9PTFWcDqpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/j3-gVuX11wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/lIJ2Lu2OswM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/0zZRff1KhZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/oPqDh_P-inU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/MDn_T_yJURQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/tSYG6wXCvHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/sNQpYTTewM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/kecLJPupApA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/AU9m-Vdp5DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/4r7yknDvxac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/UZcXmmn8dDM?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/WgnW3FUJX2I?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/rwcP6i36XdY?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/D2W0H26YJww?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/cNtkt7Vz-kQ?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/OkPrXRT_H_0?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/e8bNCgVx5Mw?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Xpx0fz6JLOE?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/ZSxBtXWZS0s?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/_jO5eCTzxf4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Kb3tUsA5Y2Q?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/LG3Em2qXZp4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/sVhKQnVg7ik?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/YLqfrkIM468?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/xldo6sg1Tps?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            
            type: 'video',
            type: 'video',task: <iframe width="560" height="315" src="https://www.youtube.com/embed/iPqhOt0gTK4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/A0ajEwBQ4F4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/zYCOR5yVtcI?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/I27R-RgTkGE?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/8qsM5xRqKl8?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/gU3eQBrQ5-g?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/AZjNeXYDWI0?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/pef19lxdo30?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/y1ny3ASajoY?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/POu_JM9lerg?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/FBrXAcHdGNs?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/RxIB4iALt08?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/8kc7aQ9esMo?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/isoM9zS-5qk?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video',
            task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Oq2XuZ1GfH4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/JGkJJE4mQBk?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/KTWxFVZrdWk?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/4g287cxzQo4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5G4xAp3rLQ?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/GpFPsyuakcA?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/TYq4hliKvsY?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/lWU1Guo4Otw?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/IQxDhnu_qJ4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Kgo_5YrZvxw?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/gMOzTpXyThw?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/f-ca0QcQwa8?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/RlCOHgMzHV0?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/hXpswswKIqM?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/IuGasO4J3QI?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Whr_WwJzmyg?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/-PPx74hJJYg?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/0j7ydOzAByY?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/IuBvDOnE2EM?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/1eghQc3Pgz4?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/JtYRKmcNgto?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/_H1ARiDqwVM?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/506MHr0C22c?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/jlPz8zMG54Y?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/pGchghvdKUc?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/81RhpOtTu8s?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/9zabH3LRPn0?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/ISGM9GENeyU?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/uSSi0kMMuEg?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/_o2HFolIZR0?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/34gToYg_k44?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/Qm5Ukl4B57E?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/EriXKHJjvfA?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/15lCDaI2o8U?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/zWAoo5M6Jag?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/HtpUVe7gjxA?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/ap2jSuNBIpE?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/q2zsdWA9ZK8?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/aflVNK788nw?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/AAemgC5MEwA?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/yLbYBb5se-o?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/TA5Gt0Fg088?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/WqJ3MZlMoZE?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/PdF59Tw7QmI?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/gTN3QqIUVYQ?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/goe2TGD4kPE?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/adKu_3PgI_c?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/MllcaHHT11k?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/VvqpddKd_fo?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/pH6tNk39bBk?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            type: 'video', task: <iframe width="560" height="315" src="https://www.youtube.com/embed/-CYjM7sXyYs?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
    ],
    
    task_6: [
        {
            task: "Долгожданный альбом. Новый альбом Оксимирона богат неймдропингом. Докажи, что ты разбираешься. Расшифруй о чем сказал автор и получи по баллу за каждый угаданный вариант (варианты в отдельном файле). ",
            type: 'victorina',
            img: 'https://cdn.spbdnevnik.ru/uploads/block/image/589666/__medium_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-11-01%20%D0%B2%2012.41.23.png.jpg',
            qs: [
                {
                    title: <p>Лапы к самиздату тянут магистраты и <b>Дяди Стёпы</b></p>,
                    text: [
                        'А. Персонаж альбома Оксимирона “Горгород”',
                        'Б. Персонаж детских мультфильмов и сказок',
                        'В. Персонаж комиксов',
                        'Г. Персонаж русских народных песен'
                    ],
                    ans: 'Б. Персонаж детских мультфильмов и сказок'
                },
                {
                    title: <p>Читающий еврей, но не <b>Матисьяху</b></p>,
                    text: [
                        'А. Стенд-ап комик',
                        'Б. Радиоведущий',
                        'В. Регги-исполнитель',
                        'Г.  Ведущий подкастов'
                    ],
                    ans: 'В. Регги-исполнитель'
                },
                {
                    title: <p>Перечеркни мои болезни, <b>Демна Гвасалия</b></p>,
                    text: [
                        'А. Психолог-блогер',
                        'Б. Дизайнер',
                        'В. Сценарист',
                        'Г. Журналист-исследователь'
                    ],
                    ans: 'Б. Дизайнер'
                },
                {
                    title: <p>Бартер: за лечение в <b>Аркхеме</b> — Пятый Картер</p>,
                    text: [
                        'А. Вымышленная психбольница в Готэм-сити',
                        'Б. Психбольница в Израиле',
                        'В. Элитная клиника в Лондоне',
                        'Г. Вымышленная клиника их романа В. Пелевина'
                    ],
                    ans: 'А. Вымышленная психбольница в Готэм-сити'
                },
                {
                    title: <p>Бартер: за лечение в Аркхеме — <b>Пятый Картер</b></p>,
                    text: [
                        'А. Альбом 50 Cent',
                        'Б. Альбом Криса Брауна',
                        'В. Альбом Lil Wayne ',
                        'Г. Альбом Eminem'
                    ],
                    ans: 'В. Альбом Lil Wayne '
                },
                {
                    title: <p>Жёлтый символ на пиджаке — не эмблема <b>Carhartt</b></p>,
                    text: [
                        'А. Британская сеть магазинов',
                        'Б. Бренд одежды',
                        'В. Бренд парфюма',
                        'Г. Британская служба доставки'
                    ],
                    ans: 'Б. Бренд одежды'
                },
            ]
        },
        {
            task: "Инагент: перед каждой фразой в течение круга произносить «Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента, и (или) российским юридическим лицом, выполняющим функции иностранного агента»",
            img: 'https://sun9-76.userapi.com/impg/FSGOCdiXFxFJkMUNfYUufq-ZDw6RFfWXPC6Jpw/sVbkXgAohuI.jpg?size=803x459&quality=96&sign=1e41b38df60104a20c33c124527f13e7&type=album'
        },
        {
            task: "Ребрендинг Фейсбук в Мета: смени имя во всех соц сетях",
            img: 'https://images11.cosmopolitan.ru/upload/img_cache/bc0/bc064f29e9184584382dd5e3d20f62ac_ce_1580x1052x0x0_cropped_666x444.jpg'
        },
        {
            task: "QR код: если у тебя есть код идёшь, если нет, возвращаешься в начало",
            img: 'https://img.rosbalt.ru/photobank/5c/44/a8/3b/TDjX6wLnRKvB-580.jpg'
        },
        {
            task: "Когда альбом: разместить в сторис белую крупную надпись «когда свадьба?» на черном фоне",
            img: 'https://sun9-9.userapi.com/impg/uE4BL7UdHRFlFMAmfLErFVQIlmDGy8iYiF0I5A/41ed7o-fzEI.jpg?size=687x320&quality=96&sign=af434d21e056860439ac5cb6382c3b28&type=album'
        },
        {
            task: "На чиле: записать сторис, где ты на чиле и произносишь чуть изменённую фразу Джигана: «Пока на расслабоне, на чиле. Можно шапусик хуярить, качаться. А пока на чиле, чиле,новый год,новый год»",
            img: 'https://i.ytimg.com/vi/HgtgivOwh94/maxresdefault.jpg'
        },
        {
            task: "Игра в кальмара: шесть раз играешь в суефа. Сколько раз выиграешь - столько баллов",
            img: 'https://disgustingmen.com/wp-content/uploads/2021/10/kalmarchik-02.jpg'
        },
        {
            task: "Роналду и кола: пока все бухают ты пьёшь воду и записываешь сторис",
            img: 'https://sun9-15.userapi.com/impg/asq4ZIWLjHCgXCvItLi4PGnHY67cGYoT9Q7QGA/wofSPfIIKHE.jpg?size=723x507&quality=96&sign=d21fdbcc42a404e75ea6345cf8636ece&type=album'
        },
        {
            task: "Васерман в думе: задают любой вопрос из Своей игры. Если отвечаешь верно, то 6",
            img: 'https://memepedia.ru/wp-content/uploads/2017/08/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B6%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BC%D0%B5%D0%BC-1.jpg'
        },
        {
            task: "Клабхаус. Ни на что не обращай Внимание в течение раунда и веди свою комнату в оффлайне. А тему для дискуссии тебе придумают другие игроки",
            img: 'https://peopletalk.ru/wp-content/uploads/2021/02/d7966a870426f0d28e1df3c8775f7891.jpg'
        },
        {
            task: "Bandana I. Тебе включают один трек с альбома, а ты должен угадать его название.",
            img: 'https://images.genius.com/240c9c48a43b211ada309a60d2e3491e.1000x1000x1.png'
        },
        {
            task: "Pussy boy. Тебе включают один трек с альбома, а ты должен угадать его название. ",
            img: 'https://i.ytimg.com/vi/lBzQ4PjsjPE/maxresdefault.jpg'
        },
        {
            task: "Топ года. Тебе называют три трека из топ-3 любого стриминга. Тебе надо расположить их в правильном порядке. За каждое угаданное место по 2 балла. Отдельное задание по каждому стримингу. ",
            img: 'https://img.gazeta.ru/files3/431/12977431/RIAN_5881673.HR-pic905-895x505-287.jpg'
        },
        {
            task: "Карпин уходи. Написать в соц сети пост с критикой сборной России по футболу. И предложить кандидатуру нового тренера. ",
            img: 'https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/39/9d/54d0e8777a5c1.jpg'
        },
        {
            task: "Губерниев против Бузовой. Выложить видео этого инцидента с подписью «И выпьем же за то, чтобы в новом году не было таких абьюзеров»",
            img: 'https://s00.yaplakal.com/pics/pics_original/6/4/3/15651346.jpg'
        },
        {
            task: "Новый IPhone. Угадать где какой iPhone. За каждый угаданный 1 балл.",
            type: 'images',
            img: [
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw4NEA8NDQ0PDxAPDQ0PDxAODRAQFREXFhURFRcYHSggGBolGxUVIjEhJSkrLi46Fx8zODMtOCg5Li0BCgoKDg0OGhAQGC0lHR0vLy0vMjUtLSstLS0rKy0vLS0rLS0tMCsvKy0tKy0tLSstLS03Ky0rKy8tListLSstLf/AABEIAPQAzgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwYHBQj/xABFEAACAQICBAkHCgUDBQAAAAAAAQIDEQQFEiExMgYHE0FRYXGBsSJykaGissEjJFJTYnWCkrPRFDNCc/BUZcIVJURj0v/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAjEQEBAAICAgEEAwAAAAAAAAAAAQIRAzESIQQTMkFRIjNh/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbUmopyexK7LiNj1eDXS0vXf4ClQqtdtac5aMbX0NLQjGPTJnn4XPMHUk6dPE4apJJ3UKmm7La9UtnWaPx6YyrDB4enCTjSr4pwrtO2klGbjB9T0V+Q4/VzCpR0K1KrKNWD04ySs4TWtNHOOFym1fb6tVCP2fb/+ivIR51q6VKVu/oPPyerN4e+ilUSloweqKnbc6kpeT3E7CSm4R5RRjNx8uMXeKfUcIZv4WHQ/zS/cfwsOh/ml+5kovyV2FwSwfwkOj2pfuUeDh9H1y/ckADWuE/Bl4ijONDEYnBV0nyVWhVqRSlzXinaS6nr6Gtp845nwjzjDVq2Hq4/GRqUZypzXLzteL2q+1Panzpo+smcy4UcX2DxmMrYmpBOpNpS+Vqw3YqK1R1bEicO9IuUx7cRnwxzVJN5hjPKV18vJ/En8HeEOa4vF4fCRzLFwdarGGm6k5qC55Wvrsk3bqOlPiqwP+ncvNxNT4tE7JeCODwFTlqWGdOrZxVWo5zcU1ZqLk7K6urot8Y4vNjrpEfBTOI3nS4QVpVNqVWhanfr8uVvQezwH4bYuOMeTZrGEcZo6VCvB/J14a7ST59j9D2WsepTrmm8YbtjcgxEXapHHcjdc8Kkqer3vzMWaRx8lt07WCkHdJ9KRUhpAAAAAAAAAAAI+Nfkrzl8SQRsdurzl8SL0i9PIz3JqGMw08PiIRnSlKSad7b107rWmnrunc0fKOLHL8PXjW061aUJKVKOIqKpThK+pxioRTa5tLS2bC7jpz/EYXA0aWHnKlLE4idOdWLanGC0m1FrdbstfacUy/Mq+DqLE0a0lUTTmnKUoVNSbhUi95O9nfr7SMcbZuOI+q4w0IKMOlJc/e+kvw8neSfNfX3ETI63KUYyd7PYpa5Wauk+lpNJ9h6MIJbFbacG5rTJQ3V/nOXllHdReABQEAzTc6xTjiJq/+azcWaHwpkliHa17O/TvPadYdqea/wAWWljn0kyjjjW4VSRTrFrLM3vyoUp60uTl0x1LvWw0TjHoSp18iu01/wBUpaMl50ObmNoo4g1fjGraVXIl0ZpS96BFvpdxWXKO0092PYvAuLae7HsXgXBuAAAAAAAAAAAI2O3V5y+JJImYvVDrqJP8siL0i9Nc4YcGaOY4eWHrJ6LanCcd+nUS1SWp9L5nvS6Tn2UcT1OnWjPEYxYqlB3jRcI0oSs9Wn5cnJfZVr9J2GLLiqZWKt1HwkYQioqcXtbd1dtu7fpJCd9Udd/6uZfuXQesyiJi1KyS6NQKlAkAKBAzSs/yipVrVKtNxlrcXTb0Zam9aex99jdGeBiq2jVmvtN+tiZePtVyzeLSZRlCTjKLjJbYyTTRkhM27FYenXjo1FdrdmtU49j+Gw1bMMBOhPRlri9yol5Ml8H1F0ylY7F1Ooa3w4nevkn3nS9+B7sZGucMpfL5L950vfgKs4fvjvdPdXYvAuMWFd6cG9rhFv0GUPSAAAAAAAAAAAIeZ7Kf9z/hImEPM92H9xe7Ii9IvTHFlyZZFl1yhSuuZovUYLl8GTExkKApcJVKC5QIGarmkajrTcYTlFN64xb530G0s8LEVtGrNfab9Zn+Tn4ce0XHy9VAw+I5tj51zk2rShWpulPY9j54vmkuszWhUVpJPol/UuxmCVJ02td4vdl8H1lXxvlzK6/KjPiuPv8ADUMTQlSqSpS3ou1+Zrmkupo1jhc/nGS/eVH34HROFGG0qccQt6m1GfXBvV6G/aZzjhU74jJvvKj78D1N7m1fFNckd/wn8un5kfBGUxYX+XT8yPgjKHpAAAAAAAAAAAEXMNxecviSiLmO4vOXxIvSL0jRLrlkS4oUrrhzUU5NqKSu22kklzt8xaaPxq4ucaOGpJtU6lSbqdEnBR0U/wAzfcugmTdTJuugYepGcVOMlOEleMotSUl0pragzTeKjOeVw9TCSfl0JaUFzunN/CV/zI3Sq9Z3ljqOrNRaUFylzhyM1LNq9sRJdH7s2xmjZ/O2Kn2LxZm+VN8ekV6eFrnpwtOLi9j5+h8zNbwtU9nCVNh4urjluOpd+lXS04VKL/qjKD6na3ich4Sv5zk33lR9+B2O/wApLufqRyDhgrY/LY80c3il2KvFH0fx8/LDbNjNckfQVPdj2LwLi2nux7F4Fxe3AAAAAAAAAAAEXMdz8S+JKIuYbneviRekXpFiVLUVKFKp4nDHIv47CSoxajWhJVcPKW7yiTWjLqabXVdPmPbBMuiVzHgNwdzPCYulip0FCld0q9N1qTqypSsnJKMmmk7S23eidXqzuRy9M6uVrq5bXXKXKXFzlCrZoHCR/PJ9i8Wb62aFwlXzufmx8WU8/wBjnLpTCyPawUth4mEiz2KMtCN+d7v7nk5Y7qYn03pVH2pehWOO8KKunjssmtks1hJfirRfxOp4vE8hhq1a9nGD0fPl5MfaaOR5u/nWTr/caH6kD2/izXHVM/sj6Rp7q7F4FxbT2LsXgXGhtAAAAAAAAAAAIuYbneiURcw3O9EXpF6REVKIqUKQqUAFSqZaVAuuLlLgA2ahndFPESbtsXizbmatm8L15P8Azayj5N1gdo9Jxjs1v1EmhFyd3rMVGjcx59nEMDRv5MsRNPkKT6fpy+yvXs61h4sLyZahl6nt5HDnM1eGDi9y1Svb6TXkQ7k2/wAUeg0PM386yj7xofqQJMq8pylOUnKcpOU5PbKTd233kHHS+d5T94UP1IHvzCYYeMZsLvklfTVPYuxFxbT2LsRccvQAAAAAAAAAAAIuY7n4kSiLmO5+JEXpF6REAgUqQqUAFQUAFSpQEAzxcRhtOpJ9bXrZ7RxzjRzbELGTwirVI4bk4ydGL0YycpTvpW1yWpandEZcH1p47RcvH22TP+GOHwqlSoOGKxOteS70Kb+3JbzX0V3tHO8XjqlepKtVm6lSb8qT9SS5kuhHlQkZ4SNfD8fDimsWfPO5dp0JkbFP53lP3hQ/UgX02WYmPzrKX/uFD9SBZn1UcX3x9PU9i7EXFtPYuxFxS9EAAAAAAAAAAAi5jufiRKIuY7n4okXpF6REAChSAAkAAAAAA4dxqv8A7pP+zT96Z3E4pxoUL5nJ7fkafvTL/jzearlusWnwZJowbM1DBN8xLhUoU9+pC6/pj5cvQjb4ftjvJ+mTBYRu2ovzzCcnXyZ/SzGj6pwMMuEFvJoU9H/2VLN90Vq9LfYebOc547K51JynKWPw6cpO+rlYal0LqRXya8bpZw45fUlvp9S09i7F4FxbT3Y9i8C4zPUAAAAAAAAAAAImap8jNrbG0u5O79VyWUaFK8pO+ta09afUVK1MBOF+StKG1U5Ozj1RfR1MsVOt9S1+OBT41T41cCnJVfqvbiOSq/Ve3EapqqgpyVX6r24jkqv1XtxGqaqoKclV+q9uJSVOt9U31acBqmqubPnnjGzV1szxLpzkoU3GktGTSvFXls51KTX4TtPCLCZpWoypYSFDDTmmuWrVFKUOuMY3Tfa+5nLXxL5tdv8AisM29bbu230ttbS3ivjd1FwtjRbylvSlLzm5eJIo0Tc1xNZv/qcL/ncZIcT+cL/ysKu5P/iX/Vx/1xeLL8NZw1AkYHDPEZpleEp+VOFeNepbXoqLjJX6N1+lGy0+KPN21GWOowi9soQi2vA6JwB4vMPlWlV0pYjF1P5mInvdaXQM+WXHUiOPgymXllW5pWVioBS1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=',
                'data:image/jpeg;base64,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'
            ],
            ans: [
                '13',
                '13 pro max',
                '12',
                '12 pro max',
                '12 mini',
                '11'
            ]
            
        },
        {
            task: "Поздравь Хованского. Написать письмо на сайте «ФСИН Письмо» (Хованский Юрий Михайлович, 1990, СИЗО 1) с поздравление Юры с новым годом.  P.S. Юра просил писать ему побольше смешных историй про себя. ",
            img: 'https://games.mail.ru/hotbox/content_files/news/2021/07/29/c6d15bbf9d7242f9af7615828b39e193.jpg'
        },
        {
            task: "Все на выборы. Перечисли все 5 политических партий, прошедших в ГосДуму. За каждую партию балл. Ещё один балл получишь, если ходил на выборы в сентябре. ",
            img: 'https://cs5.pikabu.ru/post_img/2015/11/19/6/1447921001_1542452608.jpeg'
        },
        {
            task: "Наши чемпионы. Перечисли хотя бы 6 олимпийских чемпионов 2021 от Команды РОК. Получи по баллу за каждого чемпиона, но не более 6 баллов. ",
            img: 'https://img.championat.com/s/735x490/news/big/t/q/olimpiada-2020-v-tokio-itogovyj-medalnyj-zachyot-tablica_16284131401394918483.jpg'
        },
        {
            task: "Цвет года. Цвет veri peri будет главным цветом 2022 года. Выбери его правильный оттенок и получи сразу 6 баллов. ",
            img: 'https://sun9-88.userapi.com/impg/DO742BAfR0rIp7KMPT3FVNGKoP8FBkc9gJWSgQ/8DmCC9qRkLY.jpg?size=1273x309&quality=96&sign=c8a29101730af72d859885a8ce2ee396&type=album',
            ans: <img src='https://kurjer.info/wp-content/uploads/2021/12/20211209_glavnyiy-cvet-2022.jpg'/>
        },
        
        {
            task: "Долгожданный альбом. Новый альбом Оксимирона богат неймдропингом. Докажи, что ты разбираешься. Расшифруй о чем сказал автор и получи по баллу за каждый угаданный вариант (варианты в отдельном файле). ",
            type: 'victorina',
            img: 'https://cdn.spbdnevnik.ru/uploads/block/image/589666/__medium_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202021-11-01%20%D0%B2%2012.41.23.png.jpg',
            qs: [
                {
                    title: <p>Видно, слиплись от крови глаза <b>Гестапо</b></p>,
                    text: [
                        'А. Служба разведки нацистской Германии',
                        'Б. Почтовая служба нацистской Германии',
                        'В. Служба пропаганды нацистской Германии',
                        'Г. Политическая полиция нацистской Германии'
                    ],
                    ans: 'Г. Политическая полиция нацистской Германии'
                },
                {
                    title: <p>Стёр строк больше, чем выдал <b>Джон Гришам</b></p>,
                    text: [
                        'А. Писатель',
                        'Б. Сценарист',
                        'В. Журналист',
                        'Г. Блогер'
                    ],
                    ans: 'А. Писатель'
                },
                {
                    title: <p>Вот кто поднял выразительно бровь, не <b>Азат Мифтахов</b></p>,
                    text: [
                        'А. Аспирант, осужденный за разбитое окно в офисе Единой России',
                        'Б. Оппозиционный депутат',
                        'В. Осужденный участник московских акций протестов',
                        'Г. Батл-рэпер'
                    ],
                    ans: 'А. Аспирант, осужденный за разбитое окно в офисе Единой России'
                },
                {
                    title: <p>Курёхин спит, на сцене ослы, это Хоп-механика</p>,
                    text: [
                        'А. Актер',
                        'Б. Певец',
                        'В. Танцор',
                        'Г. Музыкальный критик'
                    ],
                    ans: 'Б. Певец'
                },
                {
                    title: <p>Мёртв <b>Ницше</b>, Бог дышит</p>,
                    text: [
                        'А. Писатель',
                        'Б. Ученый',
                        'В. Поэт',
                        'Г. Философ'
                    ],
                    ans: 'Г. Философ'
                },
                {
                    title: <p>Нос тёр жёстче разве что <b>Жижек</b></p>,
                    text: [
                        'А. Философ',
                        'Б. Дизайнер',
                        'В. Блогер',
                        'Г. Политик'
                    ],
                    ans: 'А. Философ'
                },
            ]
        },
        {
            task: "Симптомы коронавируса. Все знают, что главный симптом коронавируса - потеря обоняния. А не болеешь ли ты случайно? Тебе предстоит угадать 6 блюд или напитков по запаху с завязанными глазами.",
            img: 'https://cdn.ren.tv/cache/960x540/media/img/84/79/84794169bc0a0948c04964070aa716dedf310f16.jpg'
        },
        {
            task: "Я все это хаваю, у меня нет выбора. Все игроки складывают в тарелку по 1 продукту или ингредиенту, а потом перемешивают. Ты должен все съесть.",
            img: 'https://memepedia.ru/wp-content/uploads/2021/11/ja-vse-eto-havaju-u-menja-net-vybora-2.jpg'
        },
        {
            task: "Новогоднее поздравление. Все игроки пишут на листочке по одному слову и складывают их в пакет. Ты записываешь новогоднее видео-поздравление в котором упоминаешь 5 слов, вытянутых из пакета. Видео выкладываешь в любую соц сеть.",
            img: 'https://static.1tv.ru/uploads/photo/image/6/big/424906_big_0bde9f9133.jpg'
        },
    ],
}
