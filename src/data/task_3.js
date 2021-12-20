const task_3 = [
    {
        type: 'images',
        img: [
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDw0NDQ8PDQ0NEA8QDQ0NDw8PDQ0NFRIWFhURFRUYHTQgGBolHRUVITMhJikrLi4wFx8zODMsNygtLisBCgoKDg0OGhAQGCsdHx0tKy0rLS0tLSsvKy0tNy0tLTUrLS0wKy0tLy0rLS0rKy0rLS0rKy0tLS0tLS04LSsrK//AABEIAPQAzgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUDBAYHAgj/xABKEAACAQMABQUKCggFBQEAAAAAAQIDBBEFBhIhMQdBUXLBEyIyNGFxc4GRsRQjM1JUY5OhssJCRFNig9HT4RclkqPDJEOChPAV/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EACoRAQACAgEDAgUFAQEAAAAAAAABAgMRMQQSMiFRBSJBcdEjM2GBofAT/9oADAMBAAIRAxEAPwD3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGrdX9Om9ltym+FOC2pv1c3rMH/6NR740J45tqUYv2FZtEJ1KxBWrSFb6O15HVjlE/D630d/aR/kO+DtlYgr/h9b6O/tY/yHw6v9Hf2sf5Dvg7ZWAK/4dX+jv7WI+G1/oz+1gO6DUrAFf8Nr/Rn9rAx1dIXMVn4K5LoVWLl6lgd0GpWgOL0xyjWdk0r6nWtXLcnOnWlBvo24Qcc7uGclcuWXQnNWb/hXX9Id0GnooPOv8ZNCftn9ldf0h/jNoP8Ab/7V1/SJ2aeig86/xm0H+3/2rr+kQ+WfQf7Zv+Fc7v8AbGzT0YHB2XK5oKrLZ+FRi3zzjUpr1yqRS+87SyvaNaCqUZxqQaTUovKafB+byjcGmwACUAAAAAAa2kLh06cpLfJ4jBdM3uRsldpl7qC+tT9kZEWnUJjlS6U0jRsqFS4rzaSffzSzUrVH+jH19vlZwVnyt287iNOVtLYnLYi1NTllvc5NtJeZN8eLNXl2r1VTtKaz3PZqyeOG38Ss+dKc/wDUzyWzjS2Np1NipFyaWy+Zd7hrnz044PyIx0p3L2tp+rdC39pd0+6UcPe1KOZbUZLGU096e9e1czTN6rRpxWdnPQlnLZ5HyQ6UqVLmpj5OdCEqnQqyqRjFeyVb2Hrt1Vgl301DG/PQunzFZ9J0mPVjpRzuSlSlzb3JP2mahUbzGW6UePQ1zNGtY16Ut8KsavNmLTivJlbsmebxUp/vRmn5lhr3sgbBJALISSQAKzWLQdvfW9W2uKcakakWt/Tzb+bfz8z3rej8law6HqWl3cWksy7hNxUsb5QaUoSa5m4uLx5T9kH525WaKWlq+F4UISfn2pr3RRHd2+q1ad06eX9yl82XsY7lP5svYzolA+4wK/8Av/DLHTfy0LG1xBbcVtNt70m0bcbaPzY/6UbMKZnhSNe2T122qY4iNNJ2NN8YR9iTOi5PdYq+ir63pbcpWF1UVOVOT72jUk0lJdCzjPSvLFM0qdA0tZKGzb7a3ONSDT5095GPNPfEb5RmxR2TOuH6ypzUoxkuEkmvMz6NLQ09q3pN86fvZunRidw5cgAJAAACs00l/wBP5KuV5HsSXaWZW6a/7HpPySK34TXlymuOr9O/oOjPvZrZlSm1lKXc0mmudNbn/M8bueTLSEamzCnKUW/ChKnKKXnbT+49g161kho+27thSrVMRoxl4OVCO1OS4tLK3c7lFZWcrxS41+0rOp3VXNZb90Y1Jwh5tiDUfuMVO76MltfV7Dyc6tLR1Gbq4VRJ1J4e020nvb8iykksLafHOTgNa9YK15c1YSk3TpzlGNLPebcM7UmufDTSzwSXS89Xyba6u/Ure5w60YtOWEu6Qa3ppbs4y8pLg+jL4zXHVq9tbmpOlTnVjJuXxScqifPNRW9p8d2cNtPmzNNRf5kW32+jX0bpGvbTjcUW6FVNresKWzjNOpH9KO9ZT6ek950TpBXNOyuI7lWouok+KU4U5JeySPz3ofQ9/dTp0lTrUqeVF1rinOEKcefZUt85dEY73u4Lev0HoqzVCFnRitmMKc4xhxcYRjTjGL8qjGOfLktlmu/RFInXquQfJOTHtZ9AjIySPo/P3KtD/Naz+rjnz7dQ/QB4PynwzpOr1I/jmYss6qy4fJxSpmSNMzxpGenSNSbt6sMNOkbVKgZqVE3qNua98rNWrBRtyv1xo4spP6yn2nT0Lcqtf6ONHzf1tLtMWHLvNWP5gzV/St9pfoDQCStaCW5KPD1ssDQ0D4tQ6vazfPR14hwp5AASgAAArdMfq/pfySLIrtMcbf0v5ZFb+K1eXkPLnY1Z0rSrFNwjGrB434nmm8etU5exdJ5HaaRhFUlKnGSp91ymt83OGysv9178cD9VaW0ZTuKU6NWCqUqnhQ50+aUX0/yPObzkmtZVHONVxTee/pJzXrxh+vJTHk7Vr07nE8j9tUlfd1SaglJvo2Umm/bJL1s9r1j0lb0bKVxcUlX7m4xhTeFtVW8Lvsd705NTQOrlvZU3ToLfLG3Ullznjhzbl5FuLC50fRr0attdR7pQrJbUVtppp5TTW9NNJ5XQUmdzuVojUaU2oesNveTuKcLanbXNGCnGcW6kZQbxnfhrDxuzvydg8upTzvcIScmtyzJpflZSas6t2Vgqqs6dRzrbPdKtaTlOSjnZjnCSSy9yS4l/Rp4y3vlLe32ETr6ERP1Zck5PknI2l9ZJPjIyNo0+zxflKUXfNLwkpbW7fvnLG/nPZkzx7X6i3f1ZczW71Ska/U21Rlwx8zkI0jYpUTYhRNujQOVfK6NYYqFAsKFuZbe3LK3tvIaeTM2K1Yre24bjS5UtF9y0POc/lJV6GI/MWZcfKd5orRqpJVKi+M/Ri/0PL5/ccfy0Vc6KqL6+h75FOkyzbqaRHvDS6rPus1rw9W0D4tQ6vazfK/QHitDq9rLA9pXiHJnkABKAAACp0033W03vG3PdzN7K3/8A3SWxUaa+Vs+vP8KKZPFavLKSQSa7MEkACQQSBIIyMgSMkAbH1k8u12p5u5Prfjken5PN9aKbd1We/GXjo4vgaXX21hn+mXD5OahSN22onzs4LDR0NppLieeyZJ1t0sbPbW3A6nRmjlSSqVF8Z+jH5nl8/uJ0dYRpJTn8pzL5nl85N1dGhOSZYs2bfy1TdXB5zyt1s6NmvrqP5jrbu64nAcptbasJr62l2nR+HU/XpP8AMNO8fLL3PVlv4LSy2/C479209xaFVqx4rS/8vxMtT2tPGGlPIACyAAACo00n3WzeNynPL5k9ncvf7C3K3TPG29N+SRTJ4ytXkJIBrM6QQMgSCMkrfwAAEASCMjIEnCafp5r1X+9L8TO6ycjpKlmrXf1kl5jmfFr9vTT94ZMXk5G6jgxaIrVI14VVJx2HlJPjuxv9pZ3tuaKjsnCreJrr3be3UvSjkt7NO4vfKU3wnBhqXRgr0/qrpt3N0cdr/VzZSX1lPtLmrXOZ10qZtJekp9p1uhprNT7wx5Y+SX6O1YT+CUcrHhcejae8tSu1e8Vt+p2ssT1deIc6eQAFkAAAFZpnjbem/JIsys01xtvTfkkUv4ytXkBAyarYSCBkD4q1lHyvoNi3y4qSx3y9a6UVV4+/fmWPYbmiau6UHzd8vNz9haFbNipDHPn3nxkyXCec8xiInlMcJBAyQlJQVKW1K4f10+wvjla193K5rp+C5vaj0r+ZyPjVZt0s694ZcNZtbUNDSNLGTn7uWC61g0pbp7MKkZPCbSazHPM1zM5K6vU295w+kx3mNzDYh9VKxrzrGrUuDDKsdOuJLYnVKHW2ebaXXh2ljKoU+s8s2768O03OmprLX7sWXwl+otXvFLfqdrLErtXfFLfqdrLE9BXiHNnkABKAAACs01xtvTfkkWZWab423pvySKZPGVq8vjIIGTUbCcjJAySMN3R2lleEvvRjs6dSE4zxuzhrKzsvczayMjaNM9eqnuXDnZhyRkZE+pEaTknJ85GQlOTzDXG8dO7rJPy/ez07J43yi1cX9Vfur8UzW6qnfj1LY6WdZHJ6XqydTusXiXO+ldDMVG+b48THcTzk1Gt+UY6UjtiJbN+drVXBPdSvhMyqZWcelG33QrNYpf8ATvrw7TaUjQ09L4h9aPaXw1/Ur92PL4S/Vmrvilv1O1liV2rvilv1O1lidivEOZPIACUAAAFXpzjbem/JItCr05+rem/JIpfxlavLGD5JNVnSQCAJJPkASCBkCcggAfR4rymP/MKnUj+OZ7SeM8pFPN9Vf7i/FMxZvFmwebh5S3jZIhHMmjajRMUzpuxG2tsn0mZpUzHKJG9ompk0dNv4l9aJuZNDTL+KfWiZMUfPDBl8JfrLV3xS36nayyK7V3xS36nayxOnXiHMnkABKAAACq07+rem/JItSq09+remX4JFL+MrV5YcjJGQazOnIyRkATkZIAE5GSABORkgZAnJ5vrXo11rqs0s833s9HOddFSuKzfz2c74rlnF082j3hkxTqzymWrVxTq1HUg4xeHBvhKOOK+/2CrZY5j1HT9JNxXRBe9nG6QoLecfB198ups62OsTSJcnWo4NOpEurqnxKuvE6mK+1LQ0Zldpd/FPrRLKoVml/k31kb2HyhqZvCX611d8Ut+p2ssit1c8Ut+p2ssjpV4hy55AASgAAAqtPfq3pl+CRalTp/8AVvTL8Eit/FavLXyCAa7MkEAD6IIAEggASCABJTUl8dW9JIuCoofK1vSSOP8AHI30k/eGTHy19OeEuovezk9ILidZp3w11F72cpf855vpo07GL9uHOXi4lPcFzeviUtyz0GBW7QqlVpb5N9ZFnVZV6V+TfnR1MMfNDSz+Mv1xq54pb9TtZZFbq54pb9Re9lkdGvEOXPIACUAAAFTrB+remX4JFsVOsC3Wz6K6/BMrfxWry1QQDXZkggASCABIIAEggASVNv8AK1/SSLUqrb5Wv6WXYcr4xG+m/uF6ctbT/hrqL3s5K/fE6zT779dRe9nI6QfE8/gp6uxi/bhQXr4lLcstr2XEprlndwVUvLRqsq9KPvH50WNZlZpJ9560dTDHrDSzT8sv15q54pbdRe9lkVurkcWluuiHayyN2vEObPIACUAAAFdp6k3R24rLoyjVwuLUeK9jZYgiY3GkxOnORkmk08prKa50+ckzXejJ08yt++g226Dz3r59hrh5nuNRSrc9tXXmjGXaYJrMMsWhlBi26n0e4+zX8xt1Po9x9n/cjtn2TuGUGLulT6Pc/Zf3HdKn0e5+y/uO2fY3DKDFt1Po9x9l/cbdT6PcfZ/3HbPsbhlBilUqfRrl+RU1n3nxVrVksxtbmb6FBLPtY1PsbhnnNRTlLckst+QptG1Npyn+0k5e3oKjWi31guodysqMLOm2nKddTqVnh+Dsxg448uX5lxdFS1f1xh4N3QX/AKuf+E0eu6TL1FIrTUfff4lNbxDrtYX366kfezjtIy4k3OruuFR5nd0ZPGPFsbvVRNKrqPrRLwrii/4E1/xGli+E5aczH+/hvU63HWsRqf8APyp72fEp7iR08+TfWKXGtRf8Kov+Iwy5LNPvjUo/6Kv9M6OPpbV/6fwpbq6T9J/z8uPqyPjRejp3t5bWVNOTqVI90xv2aa8Jv1Z+47a35H9LzaVavGEXxdOlOTXt2T1fUHk8s9Fx24Zq3E139ap4fm4bl5Pe8M26Y5hrZc0WjUOusqOxTpw+bFJ+fn+8zAGw1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==',
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
]

export default task_3;