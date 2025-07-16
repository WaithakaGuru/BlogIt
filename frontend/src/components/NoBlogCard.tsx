import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const NoBlogsCard = () => {
  return (
    <Card
      sx={{
        p: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)",
        boxShadow: 3,
        borderRadius: 4,
        maxWidth: { xs: "100%", sm: "80%", md: "70%" },
        mx: "auto",
        my: 6,
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <NoteAddIcon sx={{ fontSize: 60, color: "#8653fc" }} />
          <Typography variant="h5" fontWeight={600}>
            No Blogs Yet
          </Typography>
          <Typography variant="body1" color="text.secondary">
            It looks like you haven't written any stories yet. Start sharing
            your thoughts now!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/dashboard/blogs/create"
            sx={{
              mt: 2,
              background: "linear-gradient(to right, #8653fc, #c850c0)",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              borderRadius: 2,
              ":hover": {
                background: "linear-gradient(to right, #7e3ff2, #ba45b6)",
              },
            }}
          >
            Create Your First Blog
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoBlogsCard;
