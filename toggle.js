//Script to toggle Dark mode by editing CSS of Whatsapp Web page

var part = document.querySelector('body'); 

if(part.classList.contains('dark'))
{part.classList.remove('dark')
}
else
{part.classList.add('dark');
}
