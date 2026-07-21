import { useState, useEffect } from 'react';
import './Kuis.css';

const allQuizData = [
  {
    question: 'Berapa perkiraan jumlah suku bangsa asli yang mendiami pulau Papua?',
    options: ['Sekitar 50 Suku', 'Sekitar 100 Suku', 'Lebih dari 250 Suku', 'Hanya 10 Suku'],
    answer: 'Lebih dari 250 Suku',
    explanation: 'Papua sangat majemuk dan dihuni oleh lebih dari 250 kelompok suku bangsa asli dengan bahasa yang berbeda-beda.'
  },
  {
    question: 'Apa nama tas tradisional anyaman Papua yang diakui sebagai warisan budaya oleh UNESCO?',
    options: ['Noken', 'Tifa', 'Honai', 'Koteka'],
    answer: 'Noken',
    explanation: 'Noken adalah tas tradisional Papua yang dibawa dengan kepala, melambangkan kehidupan dan kesuburan.'
  },
  {
    question: 'Berdasarkan jurnal Nature (2020), berapa perkiraan jumlah spesies tumbuhan di Papua?',
    options: ['Sekitar 1.500 Spesies', 'Sekitar 5.000 Spesies', 'Sekitar 13.600 Spesies', 'Kurang dari 500 Spesies'],
    answer: 'Sekitar 13.600 Spesies',
    explanation: 'Penelitian global membuktikan Papua memiliki 13.634 spesies tumbuhan, menjadikannya pulau dengan keanekaragaman flora tertinggi di dunia.'
  },
  {
    question: 'Apa nama rumah adat tradisional Suku Dani yang terletak di Lembah Baliem?',
    options: ['Kariwari', 'Honai', 'Ebai', 'Wamai'],
    answer: 'Honai',
    explanation: 'Honai adalah rumah adat berbentuk bulat dengan atap jerami yang dirancang untuk menahan dinginnya suhu pegunungan.'
  },
  {
    question: 'Taman Nasional apa di Papua yang memiliki ekosistem lengkap dari pesisir hingga gletser salju?',
    options: ['Taman Nasional Wasur', 'Taman Nasional Teluk Cenderawasih', 'Taman Nasional Lorentz', 'Taman Nasional Komodo'],
    answer: 'Taman Nasional Lorentz',
    explanation: 'Taman Nasional Lorentz adalah Situs Warisan Dunia UNESCO dengan ekosistem terlengkap di Asia Tenggara.'
  },
  {
    question: 'Dalam mitologi Suku Asmat, siapa nama tokoh pencipta manusia yang mengukir patung dan menghidupkannya dengan tifa?',
    options: ['Ondoafi', 'Fumeripitsy', 'Manseren Mangundi', 'Biwar'],
    answer: 'Fumeripitsy',
    explanation: 'Mitos Fumeripitsy menceritakan bahwa manusia Asmat pertama kali diciptakan dari patung kayu yang dihidupkan dengan tabuhan tifa gaib.'
  },
  {
    question: 'Sistem kepemimpinan adat masyarakat pesisir Danau Sentani yang dipimpin oleh seorang pemimpin komunal disebut?',
    options: ['Kepala Suku', 'Big Man', 'Ondoafi', 'Raja'],
    answer: 'Ondoafi',
    explanation: 'Ondoafi adalah sistem kepemimpinan komunal yang sangat dihormati di wilayah Tabi (terutama pesisir Danau Sentani).'
  },
  {
    question: 'Tumbuhan epifit endemik Papua yang secara tradisional dan klinis dipercaya dapat mengobati penyakit berat adalah?',
    options: ['Sarang Semut', 'Matoa', 'Buah Merah', 'Anggrek Hitam'],
    answer: 'Sarang Semut',
    explanation: 'Sarang Semut (Myrmecodia) adalah tanaman obat Etnobotani yang rongganya dihuni semut dan kaya akan zat penyembuh alami.'
  },
  {
    question: 'Tradisi gotong royong masyarakat Papua dalam menokok batang pohon untuk mengekstrak sari pati sebagai makanan pokok disebut?',
    options: ['Bakar Batu', 'Memangkur Sagu', 'Sagu Sep', 'Molo'],
    answer: 'Memangkur Sagu',
    explanation: 'Memangkur sagu adalah proses mengekstrak pati dari batang pohon sagu, wujud kemandirian pangan masyarakat pesisir Papua.'
  },
  {
    question: 'Gunung di Mimika yang memiliki kandungan mineral emas dan tembaga terbesar di dunia adalah?',
    options: ['Puncak Jaya', 'Puncak Trikora', 'Grasberg', 'Pegunungan Arfak'],
    answer: 'Grasberg',
    explanation: 'Grasberg adalah keajaiban geologis Papua yang menyimpan cadangan tembaga dan emas terbesar di dunia.'
  },
  {
    question: 'Apa nama alat musik tiup dari kerang laut raksasa yang digunakan oleh masyarakat pesisir Biak untuk berkomunikasi?',
    options: ['Tifa', 'Pikon', 'Atowo', 'Kerang Terompet Fuu'],
    answer: 'Kerang Terompet Fuu',
    explanation: 'Fuu ditiup menggunakan cangkang kerang Triton raksasa untuk memanggil warga berkumpul di balai adat.'
  },
  {
    question: 'Tarian epik kolosal Papua dimana para ksatria melompat sambil membawa panah untuk menggentarkan musuh disebut?',
    options: ['Tari Etai', 'Tari Aluyen', 'Tari Yospan', 'Tari Perang (Fas Pobo)'],
    answer: 'Tari Perang (Fas Pobo)',
    explanation: 'Tari Perang adalah tarian maskulin yang sarat akan semangat peperangan dan kegagahan ksatria Papua.'
  },
  {
    question: 'Burung endemik Papua berukuran raksasa yang tidak bisa terbang dan memiliki cangkang keras di kepalanya adalah?',
    options: ['Burung Mambruk', 'Burung Cenderawasih', 'Kasuari', 'Maleo'],
    answer: 'Kasuari',
    explanation: 'Kasuari adalah burung primitif yang dijuluki burung paling berbahaya di dunia karena cakar dan ketangguhannya.'
  },
  {
    question: 'Pakaian tradisional laki-laki pegunungan tengah Papua yang terbuat dari labu air disebut?',
    options: ['Noken', 'Koteka', 'Mahkota Kasuari', 'Rok Rumbai'],
    answer: 'Koteka',
    explanation: 'Koteka terbuat dari labu air (Lagenaria siceraria) yang dikeringkan dan diikat sebagai pakaian tradisional pegunungan.'
  },
  {
    question: 'Ritual memasak bersama menggunakan batu yang dibakar membara sebagai simbol perdamaian di pegunungan Papua disebut?',
    options: ['Sagu Sep', 'Memangkur Sagu', 'Tradisi Bakar Batu (Barapen)', 'Ikan Kuah Kuning'],
    answer: 'Tradisi Bakar Batu (Barapen)',
    explanation: 'Bakar batu adalah ritual perdamaian dan syukuran agung dengan memasak daging dan umbi di atas batu panas.'
  }
];

const Kuis = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  // Initialize random quiz pool
  const initializeQuiz = () => {
    // Shuffle the full array and pick exactly 10 questions
    const shuffled = [...allQuizData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setQuizData(selected);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setIsAnswered(false);
  };

  // Run on mount
  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // If quizData is not loaded yet
  if (quizData.length === 0) return <div className="kuis-page container section-padding"><h2 className="text-center">Memuat Kuis...</h2></div>;

  return (
    <div className="kuis-page container section-padding">
      <div className="kuis-header">
        <h1 className="page-title">Kuis Edukasi Etnografi</h1>
        <p className="page-subtitle">Uji pengetahuan Anda tentang kebudayaan dan kekayaan alam Papua!</p>
      </div>

      <div className="kuis-container">
        {showScore ? (
          <div className="score-section">
            <h2>Kuis Selesai! 🎉</h2>
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {quizData.length}</span>
            </div>
            <p className="score-message">
              {score === quizData.length ? 'Luar biasa! Anda adalah ahli Etnografi Papua sejati.' : 
               score >= 7 ? 'Bagus sekali! Pengetahuan Anda tentang Papua sangat membanggakan.' : 
               'Teruslah belajar dan menjelajahi kekayaan Papua di web ini!'}
            </p>
            <button className="btn btn-primary btn-reset" onClick={initializeQuiz}>
              Mainkan Lagi
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Pertanyaan {currentQuestion + 1}</span> / {quizData.length}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
              ></div>
            </div>
            
            <h3 className="question-text">{quizData[currentQuestion].question}</h3>
            
            <div className="answer-section">
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonClass = 'btn-answer';
                if (isAnswered) {
                  if (option === quizData[currentQuestion].answer) {
                    buttonClass += ' correct';
                  } else if (option === selectedAnswer) {
                    buttonClass += ' incorrect';
                  }
                }

                return (
                  <button 
                    key={index} 
                    className={buttonClass}
                    onClick={() => handleAnswerClick(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="explanation-box fade-in">
                <h4>{selectedAnswer === quizData[currentQuestion].answer ? '✅ Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}</h4>
                <p>{quizData[currentQuestion].explanation}</p>
                <button className="btn btn-primary btn-next" onClick={handleNextQuestion}>
                  {currentQuestion === quizData.length - 1 ? 'Lihat Hasil' : 'Pertanyaan Selanjutnya ➔'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kuis;
