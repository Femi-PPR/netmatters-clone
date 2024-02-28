<!DOCTYPE html>
<html lang="en">
<?php
$title = "Contact Us | Netmatters";
include "inc/head.php";
?>

<body>
    <?php include "inc/cookie.php"; ?>
    <?php include "inc/sidebar.php"; ?>
    <div class="content">
        <div class="content-inner">
            <?php include "inc/header.php"; ?>
            <main>
                <section class="location-container">
                    <div class="breadcrumb-wrapper">
                        <div class="container">
                            <ul class="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>Our Offices</li>
                            </ul>
                        </div>
                    </div>

                    <div class="office-title">
                        <h2 class="container">Our Offices</h2>
                    </div>

                    <div class="container office-cards">
                        <div class="office-card">
                            <a href="" class="office-img-link"><img class="office-img" src="img/offices/london.jpg"
                                    alt=""></a>
                            <div class="office-details">
                                <a href="" class="office-card-title">
                                    London Office
                                </a>
                                <p>
                                    Unit G6,
                                    <br>
                                    Pixel Business Centre,
                                    <br>
                                    110 Brooker Road,
                                    Waltham Abbey,
                                    <br>
                                    London,
                                    <br>
                                    EN9 1JH
                                </p>
                                <a href="" class="office-contact-link">02045 397354</a>
                                <a href="" class="btn btn-office-card">View More</a>
                            </div>
                            <div class="office-map"></div>
                        </div>
                        <div class="office-card">
                            <a href="" class="office-img-link"><img class="office-img" src="img/offices/cambridge.jpg"
                                    alt=""></a>
                            <div class="office-details">
                                <a href="" class="office-card-title">
                                    Cambridge Office
                                </a>
                                <p>
                                    Unit 1.31,
                                    <br>
                                    St John&#039;s Innovation Centre,
                                    <br>
                                    Cowley Road,
                                    Milton,
                                    <br>
                                    Cambridge,
                                    <br>
                                    CB4 0WS
                                </p>
                                <a href="" class="office-contact-link">01223 37 57 72</a>
                                <a href="" class="btn btn-office-card">View More</a>
                            </div>
                            <div class="office-map"></div>
                        </div>
                        <div class="office-card">
                            <a href="" class="office-img-link"><img class="office-img" src="img/offices/wymondham.jpg"
                                    alt=""></a>
                            <div class="office-details">
                                <a href="" class="office-card-title">
                                    Wymondham Office
                                </a>
                                <p>
                                    Unit 15,
                                    <br>
                                    Penfold Drive,
                                    <br>
                                    Gateway 11 Business Park,
                                    <br>
                                    Wymondham, Norfolk,
                                    <br>
                                    NR18 0WZ
                                </p>
                                <a href="" class="office-contact-link">01603 70 40 20</a>
                                <a href="" class="btn btn-office-card">View More</a>
                            </div>
                            <div class="office-map"></div>
                        </div>
                        <div class="office-card">
                            <a href="" class="office-img-link"><img class="office-img" src="img/offices/yarmouth-2.jpg"
                                    alt=""></a>
                            <div class="office-details">
                                <a href="" class="office-card-title">
                                    Great Yarmouth Office
                                </a>
                                <p>
                                    Suite F23,
                                    <br>
                                    Beacon Innovation Centre,
                                    <br>
                                    Beacon Park, Gorleston,
                                    <br>
                                    Great Yarmouth, Norfolk,
                                    <br>
                                    NR31 7RA
                                </p>
                                <a href="" class="office-contact-link">01493 60 32 04</a>
                                <a href="" class="btn btn-office-card">View More</a>
                            </div>
                            <div class="office-map"></div>
                        </div>
                    </div>
                </section>

                <section class="container contact-us-container">
                    <div class="contact-info">
                        <p><strong>Email us on:</strong></p>
                        <p><a href="" class="office-contact-link">sales@netmatters.com</a></p>

                        <p><strong>Business hours:</strong></p>
                        <p><strong>Monday - Friday 07:00 - 18:00 </strong></p>
                    </div>
                    <a href="#" id="dropdown" class="dropdown">
                        <p>Out of Hours IT Support <i class="fa-chevron-down"></i></p>

                    </a>
                    <div id="dropdown-content" class="out-of-hours">
                        <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
                        <p><strong>Monday - Friday 18:00 - 22:00</strong><br><strong>Saturday 08:00 -
                                16:00</strong><br><strong>Sunday 10:00 - 18:00</strong></p>
                        <p>To log a critical task, you will need to call our main line number and select Option 2 to
                            leave an Out of Hours voicemail. A technician will contact you on the number provided within
                            45 minutes of your call.</p>
                    </div>

                    <form action="post" class="contact-form">

                        <label for="">Your Name <input type="text"></label>
                        <label for="">Company Name<input type="text"></label>
                        <label for="">Your Email<input type="text"></label>
                        <label for="">Your Telephone Number<input type="text"></label>
                        <label for="">Message<textarea name="" id="" cols="30"
                                rows="10">Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?</textarea></label>
                        <?php include 'inc/privacy.php'; ?>
                        <div class="recaptcha">This site is protected by reCAPTCHA and the Google <a href="#">Privacy
                                Policy</a> and <a href="#">Terms of Service</a> apply.</div>
                        <div class="action-block">
                            <button class="btn">Send Enquiry</button>
                            <small>Fields Required</small>
                        </div>
                    </form>
                </section>

                <?php include "inc/newsletter.php"; ?>
            </main>
            <?php include "inc/footer.php"; ?>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/dropdown.js"></script>
    <script src="js/stickyHeader.js"></script>
    <script src="js/sidebar.js"></script>
</body>

</html>