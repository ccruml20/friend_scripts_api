module.exports = function(sequelize, DataTypes) {
  var newAuthor = sequelize.define("authors", {
	    authorName: {
	      type: DataTypes.STRING,
	      allowNull: true
	    },
	    userName: {
	      type: DataTypes.STRING,
	      allowNull: true
	      // len: [1]
	    },
	    password: {
	      type: DataTypes.STRING,
	      allowNull: true
	      // len: [1]
  	  },
      fbUserID: {
	      type: DataTypes.STRING,
	      allowNull: true
	      // len: [1]
  	  }
  });

  return newAuthor;
};
