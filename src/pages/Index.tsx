import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const ageGroups = [
    {
      title: "Космические исследователи",
      age: "6-8 лет",
      description: "Первые шаги в мир программирования через игры и визуальное программирование",
      courses: ["Scratch", "Роботы", "Логика"],
      color: "sky"
    },
    {
      title: "Юные разработчики", 
      age: "9-12 лет",
      description: "Изучение основ программирования и создание первых проектов",
      courses: ["Python", "Web-дизайн", "3D-моделирование"],
      color: "cosmic"
    },
    {
      title: "IT-специалисты",
      age: "13-16 лет", 
      description: "Профессиональная подготовка и создание серьезных проектов",
      courses: ["JavaScript", "Мобильные приложения", "ИИ"],
      color: "rocket"
    }
  ];

  const teachers = [
    {
      name: "Анна Космонавтова",
      specialty: "Python & ИИ",
      experience: "5 лет"
    },
    {
      name: "Дмитрий Рокетенко", 
      specialty: "Web-разработка",
      experience: "7 лет"
    },
    {
      name: "Елена Галактикова",
      specialty: "Робототехника", 
      experience: "4 года"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "16:00-17:30", course: "Python (9-12)", group: "cosmic" },
    { day: "Вторник", time: "15:00-16:30", course: "Scratch (6-8)", group: "sky" },
    { day: "Среда", time: "17:00-18:30", course: "JavaScript (13-16)", group: "rocket" },
    { day: "Четверг", time: "16:00-17:30", course: "Робототехника (9-12)", group: "cosmic" },
    { day: "Пятница", time: "15:30-17:00", course: "Web-дизайн (13-16)", group: "rocket" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-space via-space-light to-space-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-space/80 backdrop-blur-md border-b border-cosmic/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cosmic to-rocket rounded-full animate-pulse-glow"></div>
              <h1 className="text-2xl font-bold">IT-КУБ</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#courses" className="hover:text-cosmic transition-colors">Курсы</a>
              <a href="#teachers" className="hover:text-cosmic transition-colors">Преподаватели</a>
              <a href="#schedule" className="hover:text-cosmic transition-colors">Расписание</a>
              <a href="#gallery" className="hover:text-cosmic transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-cosmic transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-float mb-8">
            <Icon name="Rocket" size={80} className="mx-auto text-rocket animate-rocket-launch" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cosmic via-sky to-rocket bg-clip-text text-transparent">
            Покори космос программирования!
          </h1> 
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Детский центр IT-КУБ — место, где юные мечтатели становятся создателями будущего
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cosmic to-cosmic-dark hover:from-cosmic-dark hover:to-cosmic text-white border-0 animate-pulse-glow">
              <Icon name="Star" size={20} className="mr-2" />
              Начать путешествие
            </Button>
            <Button size="lg" variant="outline" className="border-sky text-sky hover:bg-sky hover:text-space">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Icon name="GraduationCap" size={60} className="mx-auto text-cosmic mb-4 animate-float" />
            <h2 className="text-4xl font-bold mb-4">Курсы по возрастам</h2>
            <p className="text-xl text-gray-300">Каждый найдет свою орбиту в мире программирования</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="bg-space-light/40 backdrop-blur-sm border-cosmic/30 hover:border-cosmic/60 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">{group.title}</CardTitle>
                    <Badge className={`bg-${group.color} text-white border-0`}>
                      {group.age}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.courses.map((course, idx) => (
                      <Badge key={idx} variant="outline" className="border-gray-500 text-gray-300">
                        {course}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-cosmic to-sky hover:from-sky hover:to-cosmic">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 px-6 bg-space-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Icon name="Users" size={60} className="mx-auto text-rocket mb-4 animate-float" />
            <h2 className="text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-xl text-gray-300">Опытные наставники на пути к звездам</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-space-light/40 backdrop-blur-sm border-rocket/30 hover:border-rocket/60 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cosmic to-rocket rounded-full flex items-center justify-center animate-pulse-glow">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-white">{teacher.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {teacher.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-rocket/20 text-rocket border-rocket/40">
                    Опыт: {teacher.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Icon name="Calendar" size={60} className="mx-auto text-sky mb-4 animate-float" />
            <h2 className="text-4xl font-bold mb-4">Расписание</h2>
            <p className="text-xl text-gray-300">Планируй свое космическое путешествие</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="bg-space-light/40 backdrop-blur-sm border-sky/30 hover:border-sky/60 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Badge className={`bg-${item.group} text-white border-0`}>
                          {item.day}
                        </Badge>
                        <span className="text-gray-300 font-medium">{item.time}</span>
                      </div>
                      <div className="text-white font-semibold">{item.course}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-space-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Icon name="Image" size={60} className="mx-auto text-cosmic mb-4 animate-float" />
            <h2 className="text-4xl font-bold mb-4">Галерея проектов</h2>
            <p className="text-xl text-gray-300">Творения наших юных разработчиков</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-space-light/40 backdrop-blur-sm border-cosmic/30 hover:border-cosmic/60 transition-all duration-300 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-cosmic/20 to-rocket/20 flex items-center justify-center group-hover:from-cosmic/40 group-hover:to-rocket/40 transition-all duration-300">
                  <Icon name="Code" size={40} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-white font-semibold mb-2">Проект #{item}</h3>
                  <p className="text-gray-300 text-sm">Удивительное творение юного программиста</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Icon name="MapPin" size={60} className="mx-auto text-rocket mb-4 animate-float" />
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь с нами для начала космического путешествия</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-space-light/40 backdrop-blur-sm border-rocket/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="MapPin" size={24} className="mr-2 text-rocket" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>г. Москва, ул. Космическая, д. 42</p>
                <p>Метро "Звездная"</p>
              </CardContent>
            </Card>
            
            <Card className="bg-space-light/40 backdrop-blur-sm border-sky/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Phone" size={24} className="mr-2 text-sky" />
                  Связь
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@it-cube-space.ru</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-rocket to-cosmic hover:from-cosmic hover:to-rocket text-white border-0 animate-pulse-glow">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-space-dark border-t border-cosmic/20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-cosmic to-rocket rounded-full animate-pulse-glow"></div>
            <span className="text-xl font-bold">IT-КУБ</span>
          </div>
          <p className="text-gray-400">&copy; 2024 IT-КУБ. Все права защищены. Покоряем космос программирования вместе!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;