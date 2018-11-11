import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { FavoriteBorder, Repeat, GraphicEq, Score } from "@material-ui/icons";

const styles = {
  avatar: {
    display: "flex",
    justifyContent: "center",
    width: 64,
    height: 64,
    marginRight: "1rem"
  },
  button: {
    fontSize: 10,
    color: "#0081AF",
    padding: "5px 15px 5px 15px",
    borderRadius: 999,
    border: "1px solid #0081AF"
  },
  card: {
    fontSize: 13,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',

    width: 350,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 10px"
  },
  cardcontent: {
    margin: "1%"
  }
};

// DATA GENERATION TEMPLATE
function generateCard(data) {
  // console.log("generating card!");
  // console.log(data);

  // write a functions to go through the list of entities
  const entities = data.entities; // this is a list

  // the function that looks like python loops
  // for i in some_list:
  //    # do something
  const entities_for_return = [];
  // define the function
  function pythonLikeParsing() {
    // if you look at it carefully, i'm defining an entire function inside the forEach bracket
    // if in python you're familiar with enumerate(), here the index comes after, not before
    // if you're not familiar with enumerate() have a look online
    entities.forEach(function(entity, number) {
      // return a list of jsx
      // push (js) == append (python)
      entities_for_return.push(
        <div>
          <h4>Entity {number + 1}</h4>
          <p>Label: {entity.label}</p>
          <p>Salience: {entity.salience.toFixed(4)}</p>
          <p>Type: {entity.type}</p>
        </div>
      );
    });
  }
  // call the function
  pythonLikeParsing();

  return (
    <Card style={styles.card}>
      <CardContent style={styles.cardcontent}>
        <Avatar src={data.images[0]} style={styles.avatar} />
        <ButtonBase style={styles.button} target="_blank" href={data.url}>
          View Tweet
        </ButtonBase>
        <p>{data.text}</p>
        {/* Begin */}
        <CardActions>
          <Repeat />
          <Typography className="badge">{data.retweets}</Typography>
          <FavoriteBorder />
          <Typography className="badge">{data.favourites}</Typography>
          <GraphicEq />
          <Typography className="badge">
            {data.sentiment.magnitude.toFixed(2)}
          </Typography>
          <Score />
          <Typography className="badge">
            {data.sentiment.score.toFixed(2)}
          </Typography>
        </CardActions>
        {/* End */}
        {/* <h3>Entities</h3>
        {entities_for_return} */}
      </CardContent>
    </Card>
  );
}

const TweetCard = props => {
  const { data } = props;

  //return generateCard(data);
  return generateCard(data);
};

export default TweetCard;
