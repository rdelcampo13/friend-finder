var Friend = function(name, photo, scores) {
  this.name = name,
  this.photo = photo,
  this.scores = scores,

  this.runCompTest = function (friends) {
    var compScores = [];
    for (var i = 0; i < friends.length; i++) {
      var score = this.runCompCheck(friends[i]);
      compScores.push({id: i, score: score});
    };

    var compatibleFriend = compScores[0];
    for (var i = 0; i < compScores.length; i++) {
      if (compScores[i].score < compatibleFriend.score) {
        compatibleFriend = compScores[i];
      };
    };
    return compatibleFriend;
  },

  this.runCompCheck = function (friend) {
    var totalDifference = 0;
    for (var i = 0; i < 10; i++) {
      totalDifference += (Math.abs(parseInt(friend.scores[i]) - parseInt(this.scores[i])));
    };
    return totalDifference;
  }
};

module.exports = Friend;