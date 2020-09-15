import React from 'react';
import './review.css'
const Review = () => {
    return (
        <div className="review">
            <div class="comments-section revealator-slideup revealator-delay1 revealator-once">
                <div class="container">
                    <p class="title warring">Последние отзывы</p>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="comment-block">
                                <div class="avatar avatar-01"></div>
                                <p class="user-name">Светлана Зинченко</p>
                                <p class="user-city">Минск</p>
                                <p class="user-comment">Это стелко смотрится очень элегантно и дорого. Если бы у меня была
                                возможность, купила бы сразу родственникам!</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="comment-block">
                                <div class="avatar avatar-02"></div>
                                <p class="user-name">Марина Саблина</p>
                                <p class="user-city">Брест</p>
                                <p class="user-comment">Спасибо, осталась довольна полученным заказом.
                                 Заказывала себе гибкое стекло и приятно удивлена их качество. Очень удобно, все останется в целости!!)))</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="comment-block">
                                <div class="avatar avatar-03"></div>
                                <p class="user-name">Вика Нурлина</p>
                                <p class="user-city">Витебск</p>
                                <p class="user-comment">Заказ пришел очень быстро, я даже заказать не успела, как ко мне уже постучался курьер!
                                Супер, осталась довольна!!
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
